import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://andrescdo.github.io',
  base: '/',
  trailingSlash: 'always',

  integrations: [
    sitemap(),
  ],

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  build: {
    // Inline small assets to reduce round-trips
    inlineStylesheets: 'auto',
  },

  vite: {
    build: {
      // Keep legacy `(max-width: …)` media queries instead of the Media
      // Queries Level 4 range syntax, which older browsers ignore entirely.
      cssTarget: ['safari15', 'chrome100', 'firefox100'],
    },
  },
});
