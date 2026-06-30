# Лендинг-Завод — Chipsa

B2B landing page for Chipsa's **Landing Factory** product, implemented from the
Claude Design handoff bundle. Built with **Astro + Tailwind CSS v4 + TypeScript**
on a faithful port of the Chipsa Lander design system.

The original design export (prototype, design-system source, chat transcripts)
lives in [`project/`](./project) and [`chats/`](./chats); see
[`HANDOFF.md`](./HANDOFF.md) for the handoff notes.

## Run

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static build → dist/
npm run preview  # serve the production build
```

Static output — deploys to any static host (Vercel, Netlify, GitHub Pages, …).

## Structure

```
src/
  layouts/Base.astro          # html shell, fonts, boots the client runtimes
  pages/index.astro           # the full 12-section landing
  components/ds/              # design-system components (ported 1:1 from the bundle)
    SiteNav · Hero · Section · SectionHeader · Eyebrow · Button · ArrowLink
    FeatureCard · ProcessStep · Stat · StatGrid · LogoWall · MediaFrame
    Faq · FaqItem · PointerGlow · TeamDock · SiteFooter
  scripts/
    reveal.ts                 # scroll-triggered fade-rise runtime
    interactions.ts           # button spotlight, pointer-glow, mobile-nav toggle
  styles/
    ds-tokens.css             # colour / type / spacing tokens (source of truth)
    ds-base.css               # base layer + brand utilities (.ink-grad, .brand-flow, …)
    ds-components.css         # per-component CSS (ported from the bundle)
    global.css                # entry: tokens → base → components → Tailwind
public/images/                # team photos, founder photo, logo
```

All styling flows through the design-system CSS custom properties (e.g.
`var(--accent)`, `var(--t-h2)`, `var(--s-6)`) — never hard-coded hex. Tailwind is
wired in and its theme is mapped to the same tokens for incidental utilities.

## Sections

1. Hero · 2. Проблема · 3. Решение (light) · 4. Кейсы · 5. Процесс ·
6. О студии (stats + team dock) · 7. Что входит (light) · 8. Подкаст ·
9. Стек · 10. Условия · 11. FAQ · 12. Финальный CTA + footer.

Light "paper" bands (3 / 7) use the design system's `tone="invert"` for page
rhythm. The team row (section 6) is a macOS-dock-style avatar magnifier.

## Placeholder media — swap-in points

Real assets are pending (you'll send them later). These render as styled
placeholders today, at the correct aspect ratios:

| Where | Placeholder | Drop-in |
|---|---|---|
| Hero background | animated "stamping" gradient | `<div slot="media">` in `index.astro` → `<video>` (e.g. `/video/hero-stamping-loop.mp4`) |
| Cases 01/02 (§4) | gradient fills in `MediaFrame` | add `src=` to the two `MediaFrame`s |
| Claude Design shot (§5) | gradient fill | add `src=` to the `MediaFrame` |
| Podcast cover (§8) | "AffPapa" gradient tile | add `src=` to the `MediaFrame` |
| Client logos (§6) | text plates | pass logo `<img>`/SVG markup to `LogoWall` |
| Stack logos (§9) | text plates | pass logo `<img>`/SVG markup to `LogoWall` |

Already wired with real assets: the 12 team photos and the founder photo
(`public/images/`). Pending external links: the BWiGA case URL and the podcast
episode URL are `#` until provided. CTAs point to `https://t.me/maxkysh`.

## Notes

- Fonts are Google-Fonts stand-ins per the design-system readme (Unbounded /
  Arimo / JetBrains Mono); swap for licensed brand faces in `Base.astro` +
  `ds-tokens.css` when available.
- Reduced-motion is honoured throughout (shimmer, brand-flow, reveals, dock).
