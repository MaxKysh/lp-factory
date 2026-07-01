// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Лендинг-Завод — static B2B landing built on the Chipsa Lander design system.
// Pure static output; all interactivity ships as small vanilla-TS islands.
export default defineConfig({
  site: 'https://lpfactory.chipsa.dev',
  redirects: {
    '/': '/ru',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
