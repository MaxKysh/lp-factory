// @ts-check
import { defineConfig } from 'astro/config';

// Лендинг-Завод — static B2B landing built on the Chipsa Lander design system.
// Pure static output; all interactivity ships as small vanilla-TS islands.
// Styling is hand-authored CSS driven by design-system tokens (see src/styles).
export default defineConfig({
  site: 'https://lpfactory.chipsa.dev',
  redirects: {
    '/': '/ru',
  },
});
