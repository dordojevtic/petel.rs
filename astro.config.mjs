// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://petel.rs',
  trailingSlash: 'never',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'sr',
        locales: {
          sr: 'sr-RS',
          en: 'en-US',
        },
      },
      filter: (page) => {
        // Exclude any test or draft pages if needed
        return !page.includes('/draft/');
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['fuse.js'],
    },
  },
});
