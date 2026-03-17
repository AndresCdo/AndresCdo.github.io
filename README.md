# andrescdo.github.io

Personal portfolio and DevOps/SysAdmin blog — built with [Astro 4](https://astro.build).

🌐 **Live site:** [andrescdo.github.io](https://andrescdo.github.io)

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 4 (`^4.16.18`) |
| Language | TypeScript (strict) |
| Styling | CSS custom properties (single global token file) |
| Content | Astro Content Collections + Zod |
| Package manager | pnpm |
| Deploy | GitHub Pages via GitHub Actions |
| Forms | Formspree |
| Syntax highlighting | Shiki (`github-dark` theme) |

---

## Local development

**Prerequisites:** Node ≥ 18, pnpm ≥ 9

```bash
# Install dependencies
pnpm install

# Start dev server at http://localhost:4321
pnpm dev

# Type-check all Astro + TS files
pnpm check

# Production build (output → dist/)
pnpm build

# Preview the production build locally
pnpm preview
```

---

## Project structure

```
.
├── src/
│   ├── components/       # Header.astro, Footer.astro
│   ├── content/
│   │   ├── config.ts     # Content Collections schema (Zod)
│   │   └── blog/         # Markdown blog posts
│   ├── data/
│   │   ├── projects.ts   # Typed project data
│   │   └── skills.ts     # Typed skills/tech-stack data
│   ├── layouts/
│   │   ├── BaseLayout.astro   # HTML shell, SEO, theme flash prevention
│   │   └── PostLayout.astro   # Blog post wrapper (reading time etc.)
│   ├── pages/
│   │   ├── index.astro        # Home
│   │   ├── about.astro        # About
│   │   ├── projects.astro     # Projects portfolio
│   │   ├── contact.astro      # Contact form (Formspree)
│   │   ├── 404.astro          # Custom 404
│   │   ├── blog/
│   │   │   ├── index.astro    # Blog archive
│   │   │   └── [slug].astro   # Dynamic post pages
│   │   ├── rss.xml.js         # RSS feed
│   │   └── robots.txt.js      # robots.txt
│   └── styles/
│       └── global.css         # Design tokens + component styles
├── public/                    # Static assets (favicons, OG image)
├── docs/
│   └── adr/
│       └── ADR-001-migrate-jekyll-to-astro.md
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## Adding a blog post

Create a new `.md` file in `src/content/blog/`:

```markdown
---
title: "Your Post Title"
description: "A short description (used for SEO and previews)"
date: 2026-01-01
categories: [devops, kubernetes]
draft: false
---

Your content here...
```

The post will automatically appear in the blog archive, RSS feed, and sitemap.

---

## Configuration notes

### Contact / newsletter form
Both forms submit to [Formspree](https://formspree.io) (`xvzwwjeo`).
The endpoint is set in `src/pages/contact.astro` and `src/pages/index.astro`.

### Theme
Dark/light mode is implemented with CSS `data-theme` on `<html>`. The active theme
persists in `localStorage` and respects `prefers-color-scheme` as the initial
default. A `<script is:inline>` in `<head>` applies it before first render —
no flash of unstyled content.

---

## Deployment

Push to `main` → GitHub Actions runs:
1. `pnpm install --frozen-lockfile`
2. `pnpm check` (TypeScript + Astro diagnostics)
3. `pnpm build` → `dist/`
4. Deploy `dist/` to GitHub Pages via `actions/deploy-pages`

See [`.github/workflows/ci.yml`](.github/workflows/ci.yml) for the full pipeline.

**Required GitHub settings:**
- Settings → Pages → Source: **GitHub Actions**
- No branch-based deploy needed

---

## Architecture decision records

See [`docs/adr/`](docs/adr/) for design decisions made during development.

---

## License

MIT — see [LICENSE](LICENSE).
