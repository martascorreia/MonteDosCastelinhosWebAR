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

For the interactive Google Map, create `app/.env` with:

```text
VITE_GOOGLE_MAPS_API_KEY=your-restricted-google-maps-key
```

The key must be restricted in Google Cloud to this app's allowed origins and only the APIs it needs. Do not commit `.env`.

GitHub Pages deployments run automatically from the `main` branch through GitHub Actions. Add a repository secret named `VITE_GOOGLE_MAPS_API_KEY` before deploying.
