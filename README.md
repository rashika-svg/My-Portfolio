# Rashika Varshney: freelance portfolio

A single-page portfolio built with Angular 22 and Tailwind CSS 4. The page is prerendered to static HTML at build time, so it loads fast, ranks well and can be hosted on any static host.

Live at https://rashika-varshney.netlify.app

## Run it locally

```bash
npm install
npm start            # http://localhost:4200
```

| Script | What it does |
| --- | --- |
| `npm start` | Dev server with live reload |
| `npm run build` | Production build into `dist/portfolio/browser` |
| `npm test` | Unit tests (Vitest) |
| `npm run check:placeholders` | Lists placeholder values that still need replacing |

## Project structure

```
src/
  index.html               Static shell, font preloads, icons
  styles.css               Fonts, colour tokens, type scale, links and button
  app/
    app.ts / app.html      Page shell: header, sections, footer
    content/               All text and data: edit these files to change the site
      profile.ts           Name, contact details, availability, SEO title and description
      projects.ts          Featured and smaller projects
      services.ts          Services list
      working-together.ts  Process steps and ways to work together
      skills.ts            Toolkit groups
    core/                  SEO tags and contact-link helpers
    layout/                Site header and footer
    sections/              One folder per page section
    shared/                Section shell (light, tinted or dark), project case study, browser frame
public/                    Served as-is: icons, share image, screenshots, robots, 404
scripts/                   Placeholder checker and share-image source
```

## Before you publish

1. Replace the placeholders in `src/app/content/profile.ts`: email, LinkedIn, WhatsApp and city.
2. Check `availability` and `responseTime` in the same file still match what you can offer.
3. Run `npm run check:placeholders` until it reports none.

Optional:

- **Portrait:** put a square photo in `public/images/` and set `photo` in `profile.ts`. It appears at the top of the About section.
- **Screenshots:** add to a project's `images` in `projects.ts` (files go in `public/images/work/`). `imageLayout` picks one large lead image or a side-by-side pair.
- **Share image:** after changing your name or intro, open `scripts/og-image.html` in Chrome at 1200×630, screenshot it, and save it as `public/og-image.png`.

## Deploy

The site is a Netlify project (`rashika-varshney`). `netlify.toml` sets the build command, the publish folder (`dist/portfolio/browser`) and Node 22.

- **From this machine:** `npm run build`, then `npx netlify-cli deploy --prod --no-build --dir dist/portfolio/browser`.
- **Automatically on push:** in Netlify, open **Project configuration → Build & deploy → Link repository** and pick this repo.

Other static hosts (Vercel, Cloudflare Pages, Firebase Hosting) work the same way: build with `npm run build` and publish `dist/portfolio/browser`.
