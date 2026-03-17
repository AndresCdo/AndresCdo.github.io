# ADR-001 — Migrate personal portfolio from Jekyll to Astro 4

| Field       | Value                          |
|-------------|-------------------------------|
| Status      | **Accepted**                  |
| Date        | 2026-03-16                    |
| Deciders    | Andres Caicedo                |
| Reviewed by | @skeptic agent (adversarial)  |

---

## Context

The site `andrescdo.github.io` had been stalled for 2.5 years on a Jekyll setup.
The local Ruby environment was broken (wrong shebang in `bundle`), the SCSS/JS work
was substantial but ships nothing until the build runs, and new feature development
(dark-mode toggle, client-side search, typed data layer, RSS, sitemap) was
increasingly painful to wire into Jekyll's liquid-template model.

**Constraints that shaped the decision:**
- Node 20 is installed locally and on GitHub Actions — Astro 5 requires Node 22.
- `pnpm` is the package manager in use.
- Owner is a DevOps engineer, not a frontend specialist — keep things simple.
- Deploy target is GitHub Pages via GitHub Actions (no server-side rendering needed).
- Hard launch mindset: ship quickly, iterate later.

---

## Options considered

### Option A — Fix Jekyll, keep Ruby
- Repair the broken Ruby environment, continue with `_layouts` / Liquid templates.
- Pro: no migration effort, existing SCSS is complete.
- Con: Ruby toolchain friction will recur; Jekyll has no first-class TypeScript, no
  Content Collections, limited component model. Every new feature fight against the
  framework.

### Option B — Migrate to Next.js (App Router)
- React-based, very popular, large ecosystem.
- Pro: rich component ecosystem, easy to find help.
- Con: serious over-engineering for a static portfolio. SSR/RSC complexity without
  benefit. Bundle size at least 3× Astro for a mostly-static site. React hydration
  overhead on content pages.

### Option C — Migrate to Astro 4 ✅ (chosen)
- Islands architecture: zero JS by default, opt-in hydration.
- First-class Content Collections with Zod schema validation.
- Native TypeScript, component scoped styles, Vite build pipeline.
- `@astrojs/sitemap`, `@astrojs/rss` as first-party integrations.
- Node 18+ required — compatible with Node 20 on this machine.
- `pnpm` support is excellent.
- Static output deploys identically to Jekyll's `_site/` — same GitHub Pages workflow.

---

## Decision

**Migrate to Astro 4** (`^4.16.18`, locked to `4.16.19`).

Key technical choices made as part of this decision:

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Framework version | Astro 4 (not 5) | Node 20 installed; Astro 5 needs Node 22 |
| Islands | None (vanilla JS `<script>`) | No React dependency needed for toggles/forms |
| Content | Astro Content Collections | Type-safe front matter via Zod |
| Data layer | TypeScript `src/data/*.ts` | YAML `_data/` → typed TS, no extra tooling |
| Styling | Global CSS custom properties | Single token file, light/dark via `data-theme` |
| Theme flash | `<script is:inline>` before `<head>` render | Runs synchronously; no FOUC |
| Forms | Formspree (external) | Zero backend; replace `YOUR_FORM_ID` placeholder |
| Search | Lunr.js (planned) | Client-side, zero server cost |
| Deploy | GitHub Actions → `actions/deploy-pages` | Identical to old workflow structure |
| Package manager | pnpm | Already in use; hard-links save inode pressure |

---

## Consequences

### Positive
- Build time: ~1.6 s for 9 routes (vs. 8+ s with Jekyll + Bundler startup).
- `astro check` runs TypeScript diagnostics on all `.astro` files — catches errors
  before CI.
- Content Collections schema prevents malformed front matter from shipping.
- All Ruby/Bundler toolchain removed — `vendor/`, `.bundle/`, `Gemfile*` deleted.
- `node_modules` hard-linked via pnpm — minimal inode pressure on the steam-games
  filesystem (which had only 122 k inodes total).

### Negative / trade-offs
- Liquid template knowledge does not transfer to `.astro` component syntax.
- `@astrojs/sitemap` must be pinned to `3.2.1` — `3.7.1` breaks with Astro
  `4.16.19` (`_routes.reduce` undefined in `astro:build:done` hook). Pin should
  be reviewed when upgrading to Astro 5.
- `pnpm approve-builds` is required interactively for `esbuild` and `sharp` in
  pnpm v10's new security model; CI bypasses this via `onlyBuiltDependencies` in
  `package.json`.

### Technical debt introduced
- `YOUR_FORM_ID` placeholder in `contact.astro` and `index.astro` (newsletter CTA)
  has been replaced with the real Formspree endpoint `xvzwwjeo`.
- Lunr.js search is scaffolded (keyboard shortcut wired) but the index generation
  and search UI component are not yet built.
- `og-default.png` was generated with ImageMagick from a text-based template —
  replace with a proper designed image for production.
- No `apple-touch-icon.png` designed — current one is a resized SVG raster.

---

## Implementation notes

The migration was executed in one session with the following order:

1. `package.json` → Astro 4 deps, `type: "module"`, pnpm scripts
2. `astro.config.mjs` + `tsconfig.json`
3. `src/data/` — typed TS replacing `_data/*.yml`
4. `src/content/config.ts` + blog post migration
5. `src/styles/global.css` — full design system (CSS custom properties)
6. Layouts → `BaseLayout.astro`, `PostLayout.astro`
7. Components → `Header.astro` (theme toggle + mobile nav), `Footer.astro`
8. Pages → `index`, `about`, `projects`, `blog/index`, `blog/[slug]`,
   `contact`, `404`, `rss.xml.js`, `robots.txt.js`
9. `public/` — `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `og-default.png`
10. `.github/workflows/ci.yml` rewrite — pnpm + `astro check` + `astro build` + deploy-pages
11. Jekyll artefact cleanup — all `_*` dirs, `Gemfile*`, `vendor/`, `css/`, `feed.xml`,
    `index.html`, `*.md` (root-level), `assets/`
12. Build validated: **0 errors, 0 warnings** (`astro check` + `astro build`)
