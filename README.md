# Rashika Varshney: freelance portfolio

A single-page portfolio built with Angular 22 and Tailwind CSS 4. The page is prerendered to static HTML at build time, so it loads fast, ranks well and can be hosted on any static host.

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
  index.html               Static shell, font preload, favicons
  styles.css               Design tokens (colours, type scale, buttons)
  app/
    app.ts / app.html      Page shell: header, sections, footer
    content/               All text and data: edit these files to change the site
      profile.ts           Name, contact details, SEO title and description
      projects.ts          Project case studies
      services.ts          Services list
      process.ts           "How I work" steps
      skills.ts            Skill chips and toolkit groups
      navigation.ts        Header links
    core/                  SEO tags and contact-link helpers
    layout/                Site header and footer
    sections/              One folder per page section
    shared/                Reusable pieces: icons, project card, illustrations
public/                    Files served as-is (favicon, OG image, robots, 404)
scripts/                   Placeholder checker and OG image source
```

## Before you publish

1. Replace the placeholders in `src/app/content/profile.ts`: email, LinkedIn, WhatsApp, city and site URL.
2. Replace `https://your-domain.com` in `public/robots.txt` and `public/sitemap.xml`.
3. Run `npm run check:placeholders` until it reports none.

Optional:

- **Portrait:** put a square photo in `public/images/` and set `photo` in `profile.ts`.
- **Real screenshots:** add an `image` entry to a project in `projects.ts`. It replaces the illustration on that card.
- **Share image:** after changing your name or headline, open `scripts/og-image.html` in Chrome at 1200×630, screenshot it, and save it as `public/og-image.png`.

## Deploy to Netlify

`netlify.toml` already sets the build command (`npm run build`), the publish folder (`dist/portfolio/browser`) and Node 22.

1. Push this folder to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and pick the repository.
3. Keep the detected settings and deploy.
4. Under **Domain management**, add your custom domain, then update `site.url` in `profile.ts`.

Other static hosts (Vercel, Cloudflare Pages, Firebase Hosting) work the same way: build with `npm run build` and publish `dist/portfolio/browser`.
