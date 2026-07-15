# Deployment

This project is a Vite + React static site.

## Recommended workflow

Use GitHub as the source of truth, then connect the GitHub repository to Vercel.

## Local development on another computer

```bash
git clone <your-github-repo-url>
cd designer-portfolio-website
npm install
npm run dev
```

## Build locally

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy with Vercel

1. Create a GitHub repository and push this project.
2. Open Vercel and import the GitHub repository.
3. Use these settings:
   - Framework Preset: Vite
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Every push to the main branch will trigger a new deployment.

## Deploy with Netlify

Use these settings:

- Build Command: `npm run build`
- Publish Directory: `dist`

## Notes

- Do not commit `node_modules/` or `dist/`.
- Images are stored in `src/imports/`.
- Main app code is in `src/app/App.tsx`.
