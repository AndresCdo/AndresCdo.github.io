# Release Checklist (GitHub Pages)

Use this checklist before publishing updates to production.

## 1) Content quality

- [ ] Role/title is consistent across key pages (`DevOps & Platform Engineer`).
- [ ] Homepage, About, Projects, Contact copy is factual and free of overclaims.
- [ ] No placeholder/demo language in public-facing pages.
- [ ] Project CTAs and destinations are truthful (no broken or misleading links).

## 2) Links and navigation

- [ ] Header/Footer navigation works on desktop and mobile.
- [ ] Social links open correctly (GitHub, LinkedIn, Twitter/X).
- [ ] Contact form submits and redirect works.
- [ ] RSS endpoint `/rss.xml` and robots `/robots.txt` are reachable.

## 3) SEO and metadata

- [ ] `astro.config.mjs` `site` URL matches production domain.
- [ ] Each page has accurate title and description.
- [ ] Open Graph image exists (`/public/og-default.png`).
- [ ] Canonical URLs and sitemap generation are enabled.

## 4) Build and deployment

- [ ] `pnpm check` passes with zero errors.
- [ ] `pnpm build` succeeds and outputs static assets to `dist/`.
- [ ] GitHub Actions workflow `.github/workflows/ci.yml` is valid.
- [ ] GitHub Pages is configured to deploy from GitHub Actions.

## 5) Final manual QA

- [ ] Review homepage hero and project cards on mobile viewport.
- [ ] Validate dark/light theme toggle and readability.
- [ ] Verify 404 page and key call-to-action paths.
- [ ] Confirm all claims still reflect current work status.
