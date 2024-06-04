# Casa Marta Restaurante – website

This is the website for Casa Marta Restaurante. Visit it at: [casamartarestaurante.com](https://www.casamartarestaurante.com)

The site is built with Next.js. Any commits pushed to the `main` branch trigger a GitHub Action that deploys the live site, which is hosted on GitHub Pages.

## Running locally

Start development server with:

```bash
npm run dev
```
The site is then viewable in a web browser by visiting `http://localhost:3000`. This is usually enough for local testing.

## Static site locally

To build and view the static site locally, first run:
```bash
npm run build
```

This builds and outputs the static site in a `./out` directory. To then serve the site and view it locally, you can for example use Python's built in HTTP server:

```bash
cd out
python3 -m http.server
```

The site is then viewable in a web browser by visiting `http://localhost:8000`, unless another port is specified.
