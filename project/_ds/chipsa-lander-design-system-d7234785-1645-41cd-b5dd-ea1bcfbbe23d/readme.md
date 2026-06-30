# Chipsa Lander — Design System

A landing-page design system by **Chipsa Design Studio** (Novi Sad, Serbia). It powers Chipsa's own product landings and is the template foundation for the **Landing Factory** service, where Chipsa stands up equivalent systems for clients.

We build premium digital products with **3D, WebGL, and motion**. This system is tuned for **B2B product pages** aimed at conference organizers, iGaming operators, and industrial clients — and it must work **equally in Russian and English**.

> **Premium through restraint, scale, and confidence — not decoration.**

---

## Sources & provenance

- **Logo supplied:** `uploads/Chipsa iG Logo.png` — the "Chipsa iGaming" lockup (infinity mark + wordmark). Copied to `assets/logo-chipsa-igaming.png`; the standalone mark was cropped to `assets/mark-chipsa.png`.
- **No codebase, Figma file, or slide deck was provided.** The visual system below is derived from (a) the supplied logo's color and form language and (b) the written brief (design principles, motion, tone, language). If a Chipsa codebase or Figma exists, attach it and this system can be reconciled against the real source of truth.
- **Fonts** are Google Fonts stand-ins (see *Font substitution* below) — no brand font files were supplied.

---

## What this system IS NOT

- Not a SaaS template. Not a corporate brochure. Not a portfolio-agency theme (no team grid, no client-logo wall).
- Not "premium" through visual decoration. No drop shadows, glows, dashed borders, big pills, or bluish-purple gradients.
- Avoid the default **Hero → 3 Features → CTA → Footer** rhythm unless the content genuinely calls for exactly that.

---

## CONTENT FUNDAMENTALS

**Voice — editorial confidence.** Copy reads like a design magazine, not a product tour. Short, declarative, self-assured. State what is true; don't hedge or hype.

- **Person.** Speak as the studio: **"we" / "мы"** for Chipsa, **"you / your" / "вы / ваш"** for the client. Never "I".
- **Casing.** Sentence case for headlines and body. Eyebrows/kickers are the one place for UPPERCASE (mono, wide-tracked). No Title Case On Every Word, ever.
- **Length.** Headlines are tight and monumental — a few words at huge scale. Body earns its place: if an image, video, or diagram says it better, cut the paragraph. One idea per block.
- **Numbers as content.** Big metrics (years, projects, load times, FPS) are first-class — set them large in the display face, not buried in prose.
- **No emoji.** Not part of the brand. No exclamation-point energy, no "🚀 Let's build!". Confidence is quiet.
- **Bilingual parity.** RU and EN are both native. Write each language idiomatically — do not translate literally. **Russian runs 30–40% longer than English**, so headline and button copy is chosen to survive the longer language without wrapping awkwardly.

**Examples**
- EN eyebrow: `LANDING FACTORY · SERVICE` — RU: `LANDING FACTORY · СЕРВИС`
- EN headline: *"Premium product landings, built to convert."* — RU: *"Премиальные лендинги, которые продают."*
- EN CTA: `Start a project` — RU: `Начать проект`
- Tone to avoid: *"We're a passionate team of creatives who love crafting beautiful experiences!"* (brochure slop). Tone to keep: *"We build full-bleed product landings with 3D, WebGL and motion."*

---

## VISUAL FOUNDATIONS

**Color.** Dark base palette. Default page background is near-black, slightly teal-cooled (`--bg-page #0A1113`). Elevated surfaces lift through **tone only** (`surface-1 #1E2C33` → `surface-2 #2A3C44` → `surface-3 #374E58`) — never through shadow or glow. The steps are deliberately wide: **high contrast between adjacent surfaces is mandatory** — two surfaces either match exactly or differ unmistakably, no near-identical greys. The accent system is lifted straight from the mark's gradient: lime → green → teal → deep blue-teal. Primary accent is **teal `#1FA39A`** (primary CTAs, links, focus) with **deep blue-teal `#076281`** as the secondary fill and **green `#5FB85C`** reserved for positive status and gradient. The signature `--grad-brand` (green→teal→deep-blue) is used sparingly — one emphasized headline word, a hero wash, the primary-button hover sweep. A light "paper" surface (`#F3F5F4`) exists for the rare inverted section.

**Type.** Display = **Unbounded** (geometric display grotesque — rounded, high-contrast forms, full Cyrillic) carries the page at weights **600/700 only**, and **only at large sizes** (never below ~h3, never for running text); size, not weight, makes the scale. Body = **Helvetica Neue** (neo-grotesque, set large for easy reading). Helvetica Neue is a *system font*, not a webfont — Mac users render it locally; everyone else falls back to **Arimo** (metric-compatible, full Cyrillic). Mono = **JetBrains Mono** for eyebrows, tags, and technical labels. **Bold scale by default** — type runs large; avoid small captions and compact body. Headlines are tight (`line-height 0.98–1.16`, negative tracking); eyebrows are mono UPPERCASE with `0.22em` tracking and a leading hairline. One emphasized headline word may be clipped to the brand gradient (`.ink-grad`, optional dosed `--shimmer`). Fonts load non-blocking with `display=swap` + metric-matched fallback faces to curb CLS.

**Layout.** **Full-bleed by default.** Hero is always full-width; content sections prefer full-bleed too. A centered max-width container with gutters is the *exception*. **No section dividers** — sections separate through spacing, tone shifts, and scale changes, never horizontal rules. **Intentional grid breaks** are welcomed sparingly: an element overlaps the column structure, extends past the safe area, or bleeds into the next section — a signal of confidence and human authorship. **Anti-templated rhythm:** no two adjacent sections share a structure (if A is a 3-up grid, B is not).

**Backgrounds.** Flat dark tone is the base. Imagery is full-bleed when used. The only "effect" permitted is the atmospheric gradient wash (`--grad-atmos`) behind heroes — a soft radial teal bloom, low opacity. No repeating patterns, no noise-for-noise's-sake, no busy textures. Imagery skews **cool and deep** (teal/blue cast) to sit in the dark palette; high-contrast, confident, never pastel.

**Borders & depth.** Surfaces lift through **tone**, not lines. Cards, media frames, tags, inputs and buttons are **borderless** — a tone step (`surface-1`/`surface-2` against the darker page) or a brighter fill carries them. Hairline borders (`1px`, `--border-subtle #466069`) survive only as **structural separators** (e.g. editorial row dividers in a process list), never as decorative outlines around cards. **No drop shadows, no glows, no inset shadows for "depth."** Depth is layout and contrast. **No dashed borders. No teal top-rule on cards** — retired in favor of tone.

**Radii.** **Small only** — `8px` default (`--r-2`), `12px` ceiling for large surfaces, `0px` for hard-edged compositions. **Never pills, never heavily rounded.**

**Motion & interaction.** Hover states **have presence** — they animate (lift, slide, stroke-fill, reveal, color transition), never just flip a color. Buttons run a staged **2-step hover**: a brand color sweep wipes across (step 1), then the button grows slightly in place `1.045×` (no lift) and the trailing glyph advances `+5px` a beat later (step 2, +120ms delay). Links wipe an underline in from the left; arrow links advance the arrow `+5px`. Easing is `cubic-bezier(.22,1,.36,1)` (`--ease-out`); base duration `240ms`. **Scroll-triggered reveals are ON by default** for major content blocks — fade up `+28px` over `720ms`, subtle not theatrical; the visible end-state is the base style so print / no-JS / reduced-motion always show content. No infinite decorative loops on content. **Cursor states are deliberate** — interactive areas read as interactive beyond the default pointer.

**Cards.** A "card" here is a toned surface (`surface-1`/`surface-2`) with `8px` radius, generous padding, **no border and no shadow**. It reads as a card purely through its tone step against the page, and lifts on hover with a further tone step (+ a small `translateY`), never elevation or an outline.

**Transparency & blur.** Used rarely and purposefully: the hero atmospheric wash, and occasionally a translucent sticky nav over imagery. Not a glassmorphism system.

---

## ICONOGRAPHY

- **Approach:** restrained and linear. Icons support, they don't decorate. Stroke icons at ~1.5px weight, sized to sit with the bold type without competing.
- **System:** no brand icon font or SVG set was supplied. The recommended stand-in is **[Lucide](https://lucide.dev)** (consistent 1.5px stroke, square feel that matches the small-radius geometry), loaded from CDN. **This is a substitution — flag it and replace with Chipsa's own set if one exists.**
- **Unicode glyphs** are used deliberately for motion affordances — the corner-mark arrow `↗` in buttons and "read more" links is a glyph, not an icon asset, so it animates cheaply (advances diagonally on hover). Links go **white** on hover.
- **No emoji**, ever, as icons or decoration.
- **Logo & mark** live in `assets/` as PNG (`logo-chipsa-igaming.png`, `mark-chipsa.png`). Use the mark alone for favicons/badges; use the full lockup in nav and footer.

---

## Font substitution — ACTION NEEDED

No brand font files were provided. Current stand-ins (Google Fonts, all carry Latin **and** Cyrillic):

| Role | Substitute | Replace with |
|---|---|---|
| Display | **Unbounded** | Chipsa's real display face (if any) |
| Body | **Helvetica Neue** (system) + **Arimo** (webfont fallback) | Chipsa's real text face / a licensed Helvetica webfont |
| Mono | **JetBrains Mono** | brand mono, if specified |

If Chipsa has licensed brand fonts, drop the files into `tokens/` (or `assets/fonts/`), add `@font-face` rules in `tokens/fonts.css`, and update the family vars in `tokens/typography.css`. **Please confirm or supply the real fonts.**

---

## INDEX — what's in this system

**Global entry**
- `styles.css` — the one file consumers link. `@import`s everything below.

**Tokens** (`tokens/`)
- `colors.css` — dark surface scale, brand accents, the signature gradient, semantic status, semantic aliases.
- `typography.css` — display/body/mono families, weights, fluid type scale, line-height & tracking.
- `spacing.css` — spacing scale, section rhythm, gutters & bleed caps, small radii, motion easings/durations, z-index.
- `fonts.css` — Google Fonts import (Unbounded 600/700 / Arimo / JetBrains Mono; Helvetica Neue is a local system font) + metric-matched CLS fallback faces.
- `base.css` — element defaults + brand utilities (`.t-mega`, `.eyebrow`, `.ink-grad`, `.brand-flow` (looping deep-gradient surface for white-text cards), `.disclosure` (smooth <details> open/close via `::details-content` + `interpolate-size`), `.link` (left-wipe underline + colour shift, `width:fit-content`), `.link-arrow`, `.reveal` / `[data-reveal]` (scroll-triggered fade-rise, driven by the `reveal.js` runtime which `ds-base.js` loads; optional `data-delay` ms, gated on `html.js-reveal` so no-JS/print/reduced-motion stay visible), `.focus-in` (blur-to-sharp entrance, staggered via `--reveal-d` / `.delay-*`), surfaces, focus).

**Foundation cards** (`guidelines/*.card.html`) — specimen cards shown in the Design System tab: type (display / body / mono), colors (brand / surfaces / text+status), spacing (scale / radii / motion), brand (logo / mark+atmosphere).

**Components** (`components/`)
- `actions/` — **Button** (primary / secondary / ghost / invert; sm/md/lg; animated hover), **ArrowLink**.
## Layout (`window.<NS>.*`)

- `layout/` — page scaffolding so a new page is pure composition: **SiteNav** (fixed top bar; `links` + `cta`), **Hero** (full-height opener; background slot via `media`, foreground copy as editable children authored with `.focus-in` stagger + a gradient word, optional `scrim`/`scrollHint`), **Section** (centred content-max wrapper; `tight`/`flush`/`divided`), **LogoWall** (“trusted by” grid), **Faq** + **FaqItem** (smooth disclosure accordion; `items` or composed children), **CtaBanner** (animated brand-gradient closer with pointer glow), **SiteFooter** (`columns` + `tagline` + `legal`).

- `content/` — **SectionHeader** (mono index + hairline rule + label on the left, display title + optional lead on the right; `size` md/sm/lg/xl; stacks under ~880px; token-driven so it reads on light or dark), **ProcessStep** (numbered timeline row: large teal index + optional mono meta + title/body, hairline top rule), **PricingCard** (borderless plan card; `featured` puts it on the brand gradient with white text + primary button; pointer glow on hover), **TestimonialCard** (borderless quote + author; pointer glow on hover), **PointerGlow** (drop-in cursor-tracking glow primitive: `teal` for toned surfaces, `light` for brand-gradient; render as first child of a relative/overflow-hidden card), **Eyebrow**, **Tag**, **Stat** (`size` md/lg, optional gradient number), **StatGrid** (monument-scale stat grid; pairs with a left intro column for an "about / who's behind it" section), **FeatureCard** (line pictogram + index header, pointer-tracking teal glow on hover), **MediaFrame**.
- `forms/` — **TextField**, **SelectField**.

**UI kit** (`ui_kits/chipsa-landing/`) — high-fidelity, interactive recreation of a Chipsa *Landing Factory* product landing, composed from the components above. Bilingual RU/EN toggle, scroll reveals, working contact form. Sections: `Nav`, `Hero`, `StatsBand`, `Work`, `Process` (inverted), `Contact`, `Footer`; copy in `copy.js`; see its own `README.md`. Tagged as both a Design System card and a Starting Point.

**Templates** (`templates/`) — clone-and-edit starting pages for new landings. Each is a `.dc.html` Design Component that loads the system via a sibling `ds-base.js` and assembles the components into a full page.
- `product-landing/` — **Product Landing**. The recommended B2B skeleton: fixed nav (logo-left / menu-centre / CTA-right) · video/3D **hero** with a staged load-in and a gradient accent word · proof **stats** · **capabilities** grid · **work** gallery · **process** list · asymmetric **contact** form · footer. Entrance reveals are pure CSS (`pl-rise`, staggered via inline `--reveal-d`) so content can never get stuck hidden — reduced-motion and print force the visible end-state. Replace the copy/media, keep the structure.

**`SKILL.md`** (root) — makes this folder usable as a downloadable Agent Skill (`chipsa-design`).

---

## Using the components

In a `@dsCard` HTML file: link `styles.css`, load React UMD + ReactDOM UMD + Babel, then the compiled bundle, then read components off the namespace:

```html
<script src="../../_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, FeatureCard } = window.ChipsaLanderDesignSystem_d72347;
  // ...render
</script>
```

Style everything through the CSS custom properties — never hard-code hex values in product code.
