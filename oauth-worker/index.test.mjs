import assert from 'node:assert/strict';
import { test } from 'node:test';
import worker from './index.mjs';

const env = { GITHUB_OAUTH_ID: 'test-client', GITHUB_OAUTH_SECRET: 'test-secret' };
const base = 'https://monte-backoffice-auth.correiamarta2-95c.workers.dev';

test('OAuth state and PKCE protect the callback and token delivery', async () => {
  const auth = await worker.fetch(new Request(`${base}/auth?provider=github`), env);
  assert.equal(auth.status, 302);
  const location = new URL(auth.headers.get('location'));
  const state = location.searchParams.get('state');
  assert.equal(location.searchParams.get('code_challenge_method'), 'S256');
  const cookie = auth.headers.get('set-cookie').split(';')[0];
  const bad = await worker.fetch(new Request(`${base}/callback?code=test&state=incorrect`, { headers: { Cookie: cookie } }), env);
  assert.equal(bad.status, 400);

  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    assert.equal(url, 'https://github.com/login/oauth/access_token');
    const body = JSON.parse(options.body);
    assert.equal(body.code_verifier, cookie.split('.')[1]);
    return Response.json({ access_token: 'test-token' });
  };
  try {
    const result = await worker.fetch(new Request(`${base}/callback?code=test&state=${state}`, { headers: { Cookie: cookie } }), env);
    const html = await result.text();
    assert.equal(result.status, 200);
    assert.match(result.headers.get('set-cookie'), /Max-Age=0/);
    assert.match(html, /event\.origin !== origin/);
    assert.match(html, /https:\/\/martascorreia\.github\.io/);
    assert.match(html, /test-token/);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('unconfigured and unsupported requests fail closed', async () => {
  assert.equal((await worker.fetch(new Request(`${base}/auth?provider=github`), {})).status, 503);
  assert.equal((await worker.fetch(new Request(`${base}/auth?provider=other`), env)).status, 404);
  assert.equal((await worker.fetch(new Request(`${base}/callback?code=test&state=invalid`), env)).status, 400);
});