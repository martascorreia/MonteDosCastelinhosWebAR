# MonteDosCastelinhosWebAR

This project was created in the scope of my Master's thesis in Informatic Engineering, titled "Web Augmented Reality applied to Cultural Heritage".

Files:

-> app folder - app code

-> Poster LASIGE.pdf - poster created for "LASIGE Workshop 2024"

-> Presentation.pdf - presentation for my dissertation's defense

You can find my thesis at: https://repositorio.ulisboa.pt/handle/10400.5/95457

The website is in European Portuguese and it is advised to be open on a mobile device since the interface was not fully designed for desktops.
To access the website go to: https://martascorreia.github.io/MonteDosCastelinhosWebAR/

To run the app locally:

- open a terminal in the app folder;
- npm install
- npm start.

## Backoffice

The backoffice is a static [Decap CMS](https://decapcms.org/) editor. It is not a separate database or service: after an editor saves or publishes a change, Decap writes the content and media files to the GitHub branch configured for that editor instance. GitHub Pages then rebuilds the site from the updated branch.

### Access

- Production editor: https://martascorreia.github.io/MonteDosCastelinhosWebAR/admin/
- Local editor: http://localhost:3000/MonteDosCastelinhosWebAR/admin/ when the Vite development server is running.
- Branch preview editor: `https://martascorreia.github.io/MonteDosCastelinhosWebAR/previews/<safe-branch-name>/admin/`. For example, `feat/decap-cms-backoffice` becomes `feat_decap-cms-backoffice` in the preview URL.

Start the local server from the repository root with `pnpm --dir app dev`. The local editor still authenticates with GitHub and edits the branch selected in its CMS config; it does not use a local mock backend.

The production editor targets `main`. A branch preview targets its source branch, so it can be used to review and edit that branch without writing to `main`. Editors must sign in with a GitHub account that has write access to the configured branch. CMS publishing uses Decap's editorial workflow; drafts are kept separate until an editor publishes them.

The admin shell is `app/public/admin/index.html`; its Decap settings and content schema are in `app/public/admin/config.yml`. The `site` collection exposes the archaeological survey list, each survey's ID, title, history, and ordered gallery images. The CMS configuration is in Portuguese.

### Content and media

- Survey records: `app/src/content/sondagens.json`
- Uploaded gallery files: `app/public/images/gallery/`
- Site URL for gallery images: `/images/gallery/<filename>`

The JSON contains one record per survey with `id`, `title`, `history`, and `galleryImages`. Each gallery item has an `image` path and optional `alt` text. Image order in the CMS is the display order. The site reads this JSON at build time and resolves image URLs against the current site base path, including branch previews. Keep media uploads inside the configured gallery directory and avoid renaming or deleting an image that is still referenced by the JSON.

Because content lives in Git, the GitHub commit history is the audit trail and reverting a content change is a Git change. Local `/admin/` still reads and writes to the remote GitHub branch selected in `config.yml`; starting Vite does not create a local content backend.

### GitHub Pages and branch previews

The GitHub Actions workflow builds `main` at the repository URL and builds a preview for every other branch. Same-repository pull requests also receive a comment with the preview link. The preview build rewrites the generated CMS config to target the branch being previewed, builds that branch under `/previews/<safe-branch-name>/`, and restores the original config before building `main`. Branch names are made URL-safe by replacing runs of characters outside letters, numbers, `.`, `_`, and `-` with `_`. Previews are removed when a branch is deleted or a pull request closes.

Repository setup required for the workflow:

- Set GitHub Pages' source to **GitHub Actions**.
- In the `github-pages` environment, allow all branches if every feature branch should be able to deploy a preview.
- If the interactive Google Map is enabled, add a repository Actions secret named `VITE_GOOGLE_MAPS_API_KEY`.

### GitHub OAuth and Cloudflare Worker

GitHub Pages is static hosting and cannot perform the server-side OAuth code exchange. The GitHub backend therefore uses the Cloudflare Worker in `oauth-worker/` at `https://monte-backoffice-auth.correiamarta2-95c.workers.dev`. The CMS sets this as `backend.base_url` and uses `auth` as `backend.auth_endpoint`.

The Worker implements `/auth?provider=github` and `/callback`. It uses a short-lived HttpOnly, Secure, SameSite cookie to bind a random OAuth state and PKCE verifier to the login, validates the callback state, and only sends the resulting token to the configured GitHub Pages origin. OAuth credentials must never be added to this repository:

- `GITHUB_OAUTH_ID` is the GitHub OAuth app's public client ID. It is configured as a non-secret Worker variable; it is not an access token or client secret.
- `GITHUB_OAUTH_SECRET` is the OAuth app's confidential client secret. It must be stored as an encrypted Cloudflare Worker **Secret** with that exact name, never as a plaintext variable, repository secret, or value in a committed file.
- The GitHub OAuth app's callback URL must exactly match `https://monte-backoffice-auth.correiamarta2-95c.workers.dev/callback`. The app homepage should be the published site URL. Do not enable wildcard callback matching.

The Worker currently requests the `public_repo` scope, matching this public content repository. All CMS editors need GitHub write access. If the repository is made private, review and update the OAuth scope and Worker before relying on the backoffice. The GitHub app is configured to issue expiring user tokens, so editors may need to sign in again after a token expires.

To deploy a Worker code/config update, from the repository root run:

```sh
npx --yes wrangler@4.160.0 deploy --config oauth-worker/wrangler.jsonc
```

This command does not set the OAuth client secret. Add or update `GITHUB_OAUTH_SECRET` using Cloudflare Dashboard > **Workers & Pages** > `monte-backoffice-auth` > **Settings** > **Variables and Secrets**, choose type **Secret**, then deploy the setting. Do not use a regular text variable for this credential. Wrangler can also set it through its interactive `secret put` prompt; enter the value directly in the terminal, never in chat or a command argument.

### Verification and troubleshooting

Run the app build and focused OAuth Worker tests from the repository root:

```sh
pnpm --dir app build
node --test oauth-worker/index.test.mjs
```

The Worker tests cover OAuth state rejection, PKCE, token handoff origin checks, and fail-closed behavior when configuration is missing. To check the deployed login entry point without signing in, request `https://monte-backoffice-auth.correiamarta2-95c.workers.dev/auth?provider=github`; a configured Worker responds with a redirect to GitHub. A `503` means required OAuth configuration is missing. Do not test by pasting a GitHub client secret or access token into a URL, source file, issue, or chat.

If the admin page loads but login fails, confirm that the Worker has both the `GITHUB_OAUTH_ID` variable and encrypted `GITHUB_OAUTH_SECRET` secret, the GitHub callback URL is an exact match, and the CMS `base_url` and `auth_endpoint` point to the deployed Worker. If login succeeds but content does not load or save, verify `backend.repo`, the configured branch, and the signed-in editor's write access. A preview's CMS intentionally reads and writes to its feature branch, not `main`.

For the interactive Google Map, create `app/.env` with:

```text
VITE_GOOGLE_MAPS_API_KEY=your-restricted-google-maps-key
```

The key must be restricted in Google Cloud to this app's allowed origins and only the APIs it needs. Do not commit `.env`.

GitHub Pages deploys the `main` branch at the repository URL and publishes previews for other branches under `/previews/<branch>/`. Pull requests receive a comment with the preview link; previews are removed when branches are deleted or pull requests close. Set the repository's Pages source to **GitHub Actions**, allow all branches in the `github-pages` environment's deployment branch rules, and add a repository secret named `VITE_GOOGLE_MAPS_API_KEY` before deploying.
