// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://devnotesio.netlify.app/',
  base: '/',
  output: 'static',
  adapter: netlify(),
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/netlify']
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'astro': ['astro'],
            'tailwind': ['tailwindcss']
          }
        }
      }
    }
  }
});
