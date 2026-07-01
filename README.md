# Лендинг-Завод — Chipsa

Bilingual (RU/EN) B2B landing page for Chipsa's **Landing Factory** product,
built on a hand-authored port of the Chipsa Lander design system.

**Stack:** Astro 5 (static output) · TypeScript · design-system CSS (custom
properties, no CSS framework). Interactivity ships as small vanilla-TS islands.

## Run

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the production build
```

Static output — deployed on **Vercel** (`lpfactory.chipsa.dev`). `/` redirects
to `/ru` (see `astro.config.mjs` and `vercel.json`).

## Structure

```
src/
  pages/
    ru.astro / en.astro       # the two language entrypoints (Base + Landing)
    404.astro                 # custom not-found page
  layouts/Base.astro          # html shell: SEO/OG/hreflang/JSON-LD, fonts,
                              #   favicons, consent-gated Yandex.Metrika, cookie banner
  components/
    Landing.astro             # the full landing, rendered from content[lang]
    ds/                       # design-system components (ported 1:1 from the bundle)
      SiteNav · Hero · Section · SectionHeader · Eyebrow · Button · ArrowLink
      FeatureCard · ProcessStep · Stat · StatGrid · IconWall · MediaFrame
      Faq · FaqItem · PointerGlow · TeamDock · SiteFooter
  i18n/content.ts             # RU + EN copy dictionary (single source of text)
  scripts/
    reveal.ts                 # scroll-triggered fade-rise runtime
    interactions.ts           # button spotlight, pointer-glow, odometers, mobile-nav,
                              #   cookie consent, analytics goals, lazy video
  styles/
    ds-tokens.css             # colour / type / spacing tokens (source of truth)
    ds-base.css               # reset + base layer + brand utilities (.ink-grad, …)
    ds-components.css         # per-component CSS
    fonts.css                 # @font-face for the self-hosted subsets
    global.css                # entry: fonts → tokens → base → components
public/
  fonts/                      # self-hosted Unbounded + JetBrains Mono subsets
  images/                     # team photos, founder, client/stack logos, OG images
  video/                      # hero loop + design-system demo (+ posters)
  legal/                      # privacy-policy PDFs (RU/EN)
  robots.txt · sitemap.xml · site.webmanifest · favicons
scripts/                      # reproducible asset generators (fonts, OG, privacy PDFs)
```

## Editing guide

- **Copy / text:** everything lives in `src/i18n/content.ts` as `content = { ru, en }`.
  Edit both language objects; the components render whatever you put there.
- **Design tokens:** colours, type scale and spacing are in `src/styles/ds-tokens.css`.
  Style through `var(--accent)`, `var(--t-h2)`, `var(--s-6)`, … — never hard-code hex.
- **Layout / sections:** the page is assembled in `src/components/Landing.astro`.
  Light "paper" bands use the design system's `tone="invert"` for rhythm.
- **New behaviour:** add a small init function in `src/scripts/interactions.ts` and
  call it from `initInteractions()`. Everything writes to CSS variables — no re-renders.

## Analytics & consent

Yandex.Metrika (counter `110313193`, Webvisor + goals) is **consent-gated**: the
tag loads only after the visitor accepts the cookie banner, or on later visits
where consent is persisted in `localStorage`. With no consent nothing is loaded
and no third-party cookies are set. Goal events (`telegram`, `book_meeting`) fire
from `interactions.ts`. To measure Best Practices in Lighthouse, run from a clean
profile (incognito / cleared storage) so the gate reflects a real first visit.

## Assets

Fonts, Open Graph images and privacy PDFs are generated reproducibly by the
scripts in `scripts/` (`gen-fonts.mjs`, `gen-og.mjs`, `gen-privacy.py`). Re-run
them when the source inputs change.
