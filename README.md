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

The Decap CMS editor is served from `/admin/`. Survey titles, history text, and ordered gallery images are stored in `app/src/content/sondagens.json`; uploaded images are saved under `app/public/images/gallery/`.

The production CMS at `/admin/` reads and submits content against `main`. Each branch preview's `/admin/` is configured during its build to read and submit against that preview's source branch. Editors need write access to the target branch. The GitHub OAuth service is deployed from `oauth-worker/` to Cloudflare Workers and allows login from the GitHub Pages origin. GitHub access tokens expire, so editors may need to sign in again.

To update the OAuth Worker, run `npx --yes wrangler@4.160.0 deploy --config oauth-worker/wrangler.jsonc`. Store the GitHub OAuth app's client secret as the Worker secret `GITHUB_OAUTH_SECRET`, never in the repository or CMS configuration. Run its focused checks with `node --test oauth-worker/index.test.mjs`.

For the interactive Google Map, create `app/.env` with:

```text
VITE_GOOGLE_MAPS_API_KEY=your-restricted-google-maps-key
```

The key must be restricted in Google Cloud to this app's allowed origins and only the APIs it needs. Do not commit `.env`.

GitHub Pages deploys the `main` branch at the repository URL and publishes previews for other branches under `/previews/<branch>/`. Pull requests receive a comment with the preview link; previews are removed when branches are deleted or pull requests close. Set the repository's Pages source to **GitHub Actions**, allow all branches in the `github-pages` environment's deployment branch rules, and add a repository secret named `VITE_GOOGLE_MAPS_API_KEY` before deploying.
