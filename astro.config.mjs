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
});
