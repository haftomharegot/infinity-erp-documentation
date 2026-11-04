# Infinity ERP Documentation POC

Astro static site + Sanity Studio for publishing Infinity ERP blogs, customer stories, and guides. The site includes local preview content, so it can be built before a Sanity project is configured.

## Run locally

Requirements: Node.js 20.3+ and npm.

```sh
npm install
cp .env.example .env
npm run dev
```

Open the local Astro URL printed by the dev server. Without valid Sanity settings, the site uses its included preview articles. The preview customer story is illustrative placeholder content; replace it with approved and verified customer information before publishing.

## Connect Sanity

1. Create a Sanity project and a public dataset (usually `production`) in the Sanity management dashboard.
2. Copy the project ID and dataset name into `.env` using the variables shown in `.env.example`.
3. Start the editorial studio with `npm run studio`, then sign in and create authors, categories, tags, and articles.
4. Keep published content public/readable. Never put a Sanity write token or other secret in a `PUBLIC_` variable or in this public site.
5. Run `npm run build` again whenever content is published; the static site retrieves published content during the build.

The Sanity Studio uses the same environment variables. `.env` is intentionally ignored by Git; only `.env.example` should be committed.

## Cloudflare Pages deployment

This project is configured as a static Astro site. No server adapter or deployment secret is required for public Sanity reads.

1. Push this repository to GitHub and connect it to Cloudflare Pages (**Workers & Pages → Create application → Pages → Connect to Git**).
2. Select the repository and the `main` branch for production. The POC branch can be selected as a preview branch for testing.
3. Set the build command to `npm run build` and the build output directory to `dist`. Use the repository root as the project root.
4. In the Pages project settings, add these build environment variables for both preview and production:
   - `PUBLIC_SANITY_PROJECT_ID` = the Sanity project ID
   - `PUBLIC_SANITY_DATASET` = `production` (or your dataset name)
5. Save and deploy. Cloudflare will build on subsequent pushes. Add a custom domain from the Pages project's **Custom domains** section if desired.

Do not set the example placeholder project ID in Cloudflare; leave the Sanity variables unset until you have a real Sanity project. If unset, the site deploys using the included preview content.

## Publishing updates

Sanity content is fetched at build time, so publish an article and trigger a new Cloudflare Pages deployment to update the static site. Configure a Sanity webhook to trigger a Cloudflare Pages deploy hook when you want publishing to initiate builds automatically.

## Routes

- `/` — editorial homepage
- `/blog/` — blog articles
- `/stories/` — customer stories and case studies
- `/docs/` — guides and documentation
- `/search/` — client-side search over published site content
- `/<section>/<slug>/` — article detail pages generated at build time

## Useful commands

- `npm run dev` — local Astro server
- `npm run check` — Astro/TypeScript diagnostics
- `npm run build` — static production build
- `npm run studio` — Sanity editorial studio
