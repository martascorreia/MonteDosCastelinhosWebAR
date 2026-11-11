const CALLBACK_URL = 'https://monte-backoffice-auth.correiamarta2-95c.workers.dev/callback';
const EDITOR_ORIGIN = 'https://martascorreia.github.io';
const COOKIE_NAME = '__Host-decap-oauth';

const base64url = (bytes) => btoa(String.fromCharCode(...bytes))
  .replaceAll('+', '-').replaceAll('/', '_').replaceAll('=', '');

const randomValue = () => base64url(crypto.getRandomValues(new Uint8Array(32)));

const cookie = (value, maxAge) => `${COOKIE_NAME}=${value}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;

const response = (body, options = {}) => new Response(body, {
  ...options,
  headers: {
    'Cache-Control': 'no-store',
    'Referrer-Policy': 'no-referrer',
    'X-Content-Type-Options': 'nosniff',
    ...options.headers,
  },
});

async function authorize(env) {
  const state = randomValue();
  const verifier = randomValue();
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
  const url = new URL('https://github.com/login/oauth/authorize');
  url.search = new URLSearchParams({
    client_id: env.GITHUB_OAUTH_ID,
    redirect_uri: CALLBACK_URL,
    scope: 'public_repo',
    state,
    code_challenge: base64url(new Uint8Array(hash)),
    code_challenge_method: 'S256',
  });
  return response(null, { status: 302, headers: { Location: url.toString(), 'Set-Cookie': cookie(`${state}.${verifier}`, 600) } });
}

async function callback(request, env) {
  const url = new URL(request.url);
  const value = request.headers.get('Cookie')?.split(';').map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_NAME}=`))?.slice(COOKIE_NAME.length + 1);
  const [state, verifier] = (value || '').split('.');
  const code = url.searchParams.get('code');
  const clearCookie = { 'Set-Cookie': cookie('', 0) };
  if (!state || !verifier || !code || url.searchParams.get('state') !== state) {
    return response('Invalid or expired authorization request.', { status: 400, headers: clearCookie });
  }
  const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: env.GITHUB_OAUTH_ID, client_secret: env.GITHUB_OAUTH_SECRET, code, code_verifier: verifier, redirect_uri: CALLBACK_URL }),
  });
  const data = await tokenResponse.json();
  if (!tokenResponse.ok || typeof data.access_token !== 'string') {
    return response('GitHub authorization failed. Please try again.', { status: 502, headers: clearCookie });
  }
  const message = JSON.stringify(`authorization:github:success:${JSON.stringify({ token: data.access_token })}`).replaceAll('<', '\\u003c');
  const origin = JSON.stringify(EDITOR_ORIGIN);
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>Authorizing</title></head><body><p>Authorizing...</p><script>
    const origin = ${origin};
    const receiveMessage = (event) => {
      if (event.source !== window.opener || event.origin !== origin || event.data !== 'authorizing:github') return;
      window.removeEventListener('message', receiveMessage);
      window.opener.postMessage(${message}, origin);
    };
    window.addEventListener('message', receiveMessage);
    if (window.opener) window.opener.postMessage('authorizing:github', origin);
  </script></body></html>`;
  return response(html, { headers: { ...clearCookie, 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'" } });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method !== 'GET') return response('Method not allowed.', { status: 405 });
    if (!env.GITHUB_OAUTH_ID || !env.GITHUB_OAUTH_SECRET) return response('OAuth is not configured.', { status: 503 });
    if (url.pathname === '/auth' && url.searchParams.get('provider') === 'github') return authorize(env);
    if (url.pathname === '/callback') return callback(request, env);
    return response('Not found.', { status: 404 });
  },
};