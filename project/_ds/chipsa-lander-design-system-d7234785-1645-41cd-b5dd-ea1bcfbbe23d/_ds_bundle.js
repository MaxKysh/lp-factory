/* @ds-bundle: {"format":3,"namespace":"ChipsaLanderDesignSystem_d72347","components":[{"name":"ArrowLink","sourcePath":"components/actions/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"MediaFrame","sourcePath":"components/content/MediaFrame.jsx"},{"name":"PointerGlow","sourcePath":"components/content/PointerGlow.jsx"},{"name":"PricingCard","sourcePath":"components/content/PricingCard.jsx"},{"name":"ProcessStep","sourcePath":"components/content/ProcessStep.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"StatGrid","sourcePath":"components/content/StatGrid.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"TestimonialCard","sourcePath":"components/content/TestimonialCard.jsx"},{"name":"SelectField","sourcePath":"components/forms/SelectField.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"CtaBanner","sourcePath":"components/layout/CtaBanner.jsx"},{"name":"FaqItem","sourcePath":"components/layout/Faq.jsx"},{"name":"Faq","sourcePath":"components/layout/Faq.jsx"},{"name":"Hero","sourcePath":"components/layout/Hero.jsx"},{"name":"LogoWall","sourcePath":"components/layout/LogoWall.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteNav","sourcePath":"components/layout/SiteNav.jsx"}],"sourceHashes":{"components/actions/ArrowLink.jsx":"e9d49e067cdf","components/actions/Button.jsx":"4af79879363c","components/content/Eyebrow.jsx":"2746ab79d598","components/content/FeatureCard.jsx":"47172d05da79","components/content/MediaFrame.jsx":"c98de7202fac","components/content/PointerGlow.jsx":"98a70a2775ea","components/content/PricingCard.jsx":"306a30a70280","components/content/ProcessStep.jsx":"c182f3d7a4ac","components/content/SectionHeader.jsx":"da533e42707c","components/content/Stat.jsx":"4f517b445fad","components/content/StatGrid.jsx":"d0a43bc71e91","components/content/Tag.jsx":"5fa3a16ad361","components/content/TestimonialCard.jsx":"686a32e84550","components/forms/SelectField.jsx":"a077253ca588","components/forms/TextField.jsx":"5f7393f4e7f7","components/layout/CtaBanner.jsx":"c023d80b1505","components/layout/Faq.jsx":"75a88ae4a910","components/layout/Hero.jsx":"6343dd7ea65b","components/layout/LogoWall.jsx":"1d69b1b13053","components/layout/Section.jsx":"e589729b2ed1","components/layout/SiteFooter.jsx":"8d15977e4bb2","components/layout/SiteNav.jsx":"dad7903fb5e0","components/layout/logoData.js":"cc2c69f62c26","reveal.js":"955023203dbd"},"inlinedExternals":[],"unexposedExports":[{"name":"chipsaLogo","sourcePath":"components/layout/logoData.js"}]} */

(() => {

const __ds_ns = (window.ChipsaLanderDesignSystem_d72347 = window.ChipsaLanderDesignSystem_d72347 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — ArrowLink
 * Inline text link where the label sits and the arrow advances on hover.
 * Use for tertiary navigation and "read more" affordances.
 */
function ArrowLink({
  children,
  href = '#',
  glyph = '↗',
  tone = 'accent',
  onClick,
  style,
  ...rest
}) {
  const color = tone === 'strong' ? 'var(--text-strong)' : 'var(--accent-text)';
  const hoverColor = '#FFFFFF';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: e => {
      e.currentTarget.style.color = hoverColor;
      const a = e.currentTarget.querySelector('[data-arw]');
      if (a) a.style.transform = 'translate(4px,-4px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = color;
      const a = e.currentTarget.querySelector('[data-arw]');
      if (a) a.style.transform = 'none';
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      color,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--w-medium)',
      fontSize: '1.0625rem',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("span", {
    "data-arw": true,
    style: {
      display: 'inline-block',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, glyph));
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — Button
 * Signature hover: a circular mask opens from the cursor position and grows to
 * fill over ~900ms (expo-out — fast start, long slow finish), then collapses
 * FAST (~260ms) on leave so a quick in-out can never leave the fill stuck open.
 *
 * Two reveal modes, IDENTICAL timing/easing:
 *  - PRIMARY / INVERT ('flip'): the circle inverts to a contrasting fill and
 *    carries its own text layer, so the label flips colour.
 *  - SECONDARY ('wash'): a neutral GREY that lightens — the circle is a
 *    background layer behind ONE fixed text layer, so the label never moves.
 *
 * A spotlight tracks the pointer; the corner-mark glyph (↗) advances a beat
 * behind. Hover visuals are driven by the CSS :hover pseudo-class (injected
 * once), NOT React state — the browser manages :hover so it can never stick.
 * Cursor position is written straight to a CSS variable on the node, so moving
 * the mouse never triggers a React re-render.
 */
const STYLE_ID = 'cl-btn-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
@property --mx { syntax: '<length-percentage>'; inherits: true; initial-value: 50%; }
@property --my { syntax: '<length-percentage>'; inherits: true; initial-value: 50%; }
.clbtn { position:relative; overflow:hidden; isolation:isolate; display:inline-flex;
  align-items:center; border:none; border-radius:var(--r-2); cursor:pointer;
  font-family:var(--font-sans); font-weight:var(--w-semibold); line-height:1;
  letter-spacing:-0.005em; text-decoration:none; white-space:nowrap;
  transform-origin:center; --mx:50%; --my:50%;
  transition: transform var(--dur-base) var(--ease-expo); }
.clbtn:not(.clbtn--ghost):not([data-disabled]):hover { transform: scale(1.03); }
/* the ONE text layer — always above the wash reveal, never duplicated */
.clbtn__base { position:relative; z-index:1; display:inline-flex; align-items:center; gap:.6em; }
/* reveal layer — circular mask growing from the cursor; same params everywhere */
.clbtn__reveal { position:absolute; inset:0; opacity:1;
  clip-path: circle(0px at var(--mx) var(--my));
  transition: clip-path 260ms var(--ease-out); }
.clbtn:not([data-disabled]):hover .clbtn__reveal { clip-path: circle(150% at var(--mx) var(--my));
  transition: clip-path 900ms var(--ease-expo); }
/* flip mode — reveal sits ABOVE the base text and carries its own (inverted) text */
.clbtn__reveal--flip { z-index:2; display:inline-flex; align-items:center;
  background: var(--cl-inv-bg); color: var(--cl-inv-text); }
/* wash mode — reveal is a background layer BEHIND the single text layer */
.clbtn__reveal--wash { z-index:0; background: var(--cl-inv-bg); }
.clbtn__spot { position:absolute; inset:0; z-index:3; pointer-events:none; opacity:0;
  background: radial-gradient(140px 140px at var(--mx) var(--my), var(--cl-spot), transparent 62%);
  mix-blend-mode: var(--cl-blend); transition: opacity 200ms var(--ease-out); }
.clbtn:not([data-disabled]):hover .clbtn__spot { opacity:1; transition: opacity var(--dur-base) var(--ease-out); }
.clbtn__arw { display:inline-block; font-weight:var(--w-medium);
  transition: transform var(--dur-base) var(--ease-expo) 90ms; }
.clbtn:not([data-disabled]):hover .clbtn__arw { transform: translate(4px,-4px); }
@media (prefers-reduced-motion: reduce) {
  .clbtn, .clbtn__reveal, .clbtn__spot, .clbtn__arw { transition: none !important; }
}`;
  document.head.appendChild(el);
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  icon = false,
  iconGlyph = '↗',
  disabled = false,
  type = 'button',
  onClick,
  style,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  const pad = {
    sm: '10px 16px',
    md: '14px 24px',
    lg: '18px 32px'
  }[size] || '14px 24px';
  const fs = {
    sm: '0.9375rem',
    md: '1.0625rem',
    lg: '1.1875rem'
  }[size] || '1.0625rem';

  // Each variant: resting fill + text, the circle's revealed fill (+ text for
  // flip mode), the pointer spotlight, and which reveal mode it uses.
  const palettes = {
    primary: {
      bg: 'var(--teal-500)',
      base: '#FFFFFF',
      invBg: '#FFFFFF',
      invText: 'var(--ink-900)',
      spot: 'rgba(31,163,154,0.30)',
      blend: 'normal',
      mode: 'flip',
      ghost: false
    },
    secondary: {
      bg: 'var(--ink-600)',
      base: '#FFFFFF',
      invBg: 'var(--ink-400)',
      invText: '#FFFFFF',
      spot: 'rgba(244,247,246,0.20)',
      blend: 'normal',
      mode: 'wash',
      ghost: false
    },
    invert: {
      bg: 'var(--paper-050)',
      base: 'var(--fg-on-paper-1)',
      invBg: 'var(--ink-800)',
      invText: '#FFFFFF',
      spot: 'rgba(255,255,255,0.30)',
      blend: 'screen',
      mode: 'flip',
      ghost: false
    },
    ghost: {
      bg: 'transparent',
      base: 'var(--accent-text)',
      invBg: null,
      invText: null,
      spot: null,
      blend: null,
      mode: 'none',
      ghost: true
    }
  };
  const pal = palettes[variant] || palettes.primary;
  const isGhost = pal.ghost;
  const facePad = isGhost ? `${pad.split(' ')[0]} 0` : pad;
  const setPos = e => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  const Face = ({
    className
  }) => /*#__PURE__*/React.createElement("span", {
    className: className,
    style: {
      padding: facePad
    }
  }, /*#__PURE__*/React.createElement("span", null, children), icon && /*#__PURE__*/React.createElement("span", {
    className: "clbtn__arw"
  }, iconGlyph));
  const rootStyle = {
    fontSize: fs,
    background: pal.bg,
    color: pal.base,
    opacity: disabled ? 0.4 : 1,
    cursor: disabled ? 'not-allowed' : 'pointer',
    '--cl-inv-bg': pal.invBg || 'transparent',
    '--cl-inv-text': pal.invText || 'inherit',
    '--cl-spot': pal.spot || 'transparent',
    '--cl-blend': pal.blend || 'normal',
    ...style
  };
  const Tag = href && !disabled ? 'a' : 'button';
  const tagProps = href && !disabled ? {
    href
  } : {
    type,
    disabled
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `clbtn${isGhost ? ' clbtn--ghost' : ''}`
  }, tagProps, disabled ? {
    'data-disabled': ''
  } : {}, {
    onClick: disabled ? undefined : onClick,
    onPointerMove: disabled ? undefined : setPos,
    onPointerEnter: disabled ? undefined : setPos,
    style: rootStyle
  }, rest), pal.mode === 'wash' && !disabled && /*#__PURE__*/React.createElement("span", {
    className: "clbtn__reveal clbtn__reveal--wash",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement(Face, {
    className: "clbtn__base"
  }), pal.mode === 'flip' && !disabled && /*#__PURE__*/React.createElement(Face, {
    className: "clbtn__reveal clbtn__reveal--flip"
  }), pal.mode !== 'none' && !disabled && /*#__PURE__*/React.createElement("span", {
    className: "clbtn__spot",
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Chipsa Lander — Eyebrow / kicker. Mono, uppercase, wide tracking, leading hairline. */
function Eyebrow({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const color = tone === 'muted' ? 'var(--text-muted)' : 'var(--accent-text)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--s-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-eyebrow)',
      fontWeight: 'var(--w-medium)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '1.75rem',
      height: '1px',
      background: 'currentColor',
      opacity: 0.6
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — MediaFrame. Full-bleed-friendly container for image/video.
 * Small radius, NO border, no shadow. Optional mono caption overlay and
 * a cool teal protection wash so overlaid type stays legible. Visual leads.
 */
function MediaFrame({
  src,
  alt = '',
  caption,
  label,
  ratio = '16 / 9',
  fill = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      position: 'relative',
      margin: 0,
      aspectRatio: fill ? undefined : ratio,
      height: fill ? '100%' : undefined,
      width: '100%',
      overflow: 'hidden',
      borderRadius: 'var(--r-2)',
      background: 'var(--surface-1)',
      ...style
    }
  }, rest), src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), children, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 'var(--s-4)',
      left: 'var(--s-4)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      color: 'var(--fg-1)',
      background: 'rgba(7,9,10,0.55)',
      backdropFilter: 'blur(6px)',
      padding: '6px 10px',
      borderRadius: 'var(--r-1)'
    }
  }, label), caption && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgba(7,9,10,0.78) 0%, rgba(7,9,10,0) 46%)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: 'absolute',
      left: 'var(--s-5)',
      right: 'var(--s-5)',
      bottom: 'var(--s-5)',
      color: 'var(--fg-1)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-semibold)',
      fontSize: 'var(--t-h3)',
      letterSpacing: '-0.02em',
      lineHeight: 1.1
    }
  }, caption)));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/content/PointerGlow.jsx
try { (() => {
/**
 * Chipsa Lander — PointerGlow. A drop-in pointer-tracking glow for cards.
 * Render it as the FIRST child of any `position:relative; overflow:hidden`
 * container; it attaches pointer listeners to that parent and paints a soft
 * radial glow that follows the cursor, fading in on enter and out on leave.
 *
 * Pointer position is written straight to CSS variables on the glow node, so
 * moving the mouse never triggers a React re-render. Opacity is toggled in JS
 * on enter/leave, so it works on any container regardless of its classes and
 * can never stick. Reduced-motion suppresses it.
 *
 * variant:
 *  - 'teal'  (default) — teal glow + faint concentric rings, masked to fade
 *    out around the cursor. For toned/dark surfaces.
 *  - 'light' — soft white glow that BRIGHTENS what's under it (screen blend),
 *    no darkening and no rings. For the brand-gradient featured surfaces.
 */
const STYLE_ID = 'cl-pglow-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
@property --pgx { syntax: '<length-percentage>'; inherits: false; initial-value: 50%; }
@property --pgy { syntax: '<length-percentage>'; inherits: false; initial-value: 50%; }
.cl-pglow { position:absolute; inset:0; z-index:0; pointer-events:none; opacity:0;
  border-radius:inherit; --pgx:50%; --pgy:50%;
  transition: opacity var(--dur-base) var(--ease-out), --pgx 90ms linear, --pgy 90ms linear; }
.cl-pglow--teal {
  background:
    repeating-radial-gradient(circle at var(--pgx) var(--pgy), rgba(87,214,200,0.07) 0 1.5px, transparent 1.5px 26px),
    radial-gradient(circle 300px at var(--pgx) var(--pgy), rgba(87,214,200,0.18), transparent 66%);
  -webkit-mask: radial-gradient(circle 320px at var(--pgx) var(--pgy), #000, transparent 72%);
          mask: radial-gradient(circle 320px at var(--pgx) var(--pgy), #000, transparent 72%); }
.cl-pglow--light { mix-blend-mode: screen;
  background: radial-gradient(circle 280px at var(--pgx) var(--pgy), rgba(255,255,255,0.22), transparent 70%); }
@media (prefers-reduced-motion: reduce) { .cl-pglow { display:none; } }`;
  document.head.appendChild(el);
}
function PointerGlow({
  variant = 'teal'
}) {
  React.useEffect(ensureStyles, []);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const glow = ref.current;
    const parent = glow && glow.parentNode;
    if (!parent) return;
    const move = e => {
      const r = parent.getBoundingClientRect();
      glow.style.setProperty('--pgx', `${e.clientX - r.left}px`);
      glow.style.setProperty('--pgy', `${e.clientY - r.top}px`);
    };
    const enter = e => {
      move(e);
      glow.style.opacity = '1';
    };
    const leave = () => {
      glow.style.opacity = '0';
    };
    parent.addEventListener('pointerenter', enter);
    parent.addEventListener('pointermove', move);
    parent.addEventListener('pointerleave', leave);
    return () => {
      parent.removeEventListener('pointerenter', enter);
      parent.removeEventListener('pointermove', move);
      parent.removeEventListener('pointerleave', leave);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: `cl-pglow cl-pglow--${variant}`,
    "aria-hidden": "true"
  });
}
Object.assign(__ds_scope, { PointerGlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PointerGlow.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — FeatureCard. Toned surface, small radius, NO border and
 * NO shadow — it lifts purely through TONE. A line pictogram and the index
 * sit in a header row; title and body follow with deliberate spacing.
 *
 * Hover: the card tone-steps and lifts, and the shared PointerGlow paints a
 * soft teal glow that tracks the cursor.
 */
const STYLE_ID = 'cl-fcard-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.fcard { position:relative; overflow:hidden; isolation:isolate;
  background:var(--surface-1); border-radius:var(--r-2); padding:var(--s-6);
  transition: background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
.fcard--link { cursor:pointer; }
.fcard:hover { background:var(--surface-2); transform: translateY(-4px); }
.fcard__content { position:relative; z-index:1; display:flex; flex-direction:column; }
.fcard__arw { display:inline-block; transition: transform var(--dur-base) var(--ease-expo) 60ms; }
.fcard:hover .fcard__arw { transform: translate(4px,-4px); }
@media (prefers-reduced-motion: reduce) {
  .fcard, .fcard__arw { transition:none !important; }
  .fcard:hover { transform:none; }
}`;
  document.head.appendChild(el);
}

// Brand line icons — 1.5px stroke, currentColor (teal), round joins.
const ICONS = {
  trend: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
    points: "3 17 9 11 13 15 21 7"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "15 7 21 7 21 13"
  })),
  spark: /*#__PURE__*/React.createElement("path", {
    d: "M12 3c.4 4.3 1.4 5.3 5.7 5.7C13.4 9.1 12.4 10.1 12 14.4c-.4-4.3-1.4-5.3-5.7-5.7C10.6 8.3 11.6 7.3 12 3Z"
  }),
  layers: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 3 7.5 12 12l9-4.5L12 3Z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "3 12 12 16.5 21 12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "3 16.5 12 21 21 16.5"
  })),
  target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4.5"
  })),
  grid: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "3.5",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "3.5",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "3.5",
    y: "13.5",
    width: "7",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "13.5",
    width: "7",
    height: "7",
    rx: "1"
  })),
  bolt: /*#__PURE__*/React.createElement("path", {
    d: "M13 3 5 13h6l-1 8 8-10h-6l1-8Z"
  })
};
function Pictogram({
  icon
}) {
  if (React.isValidElement(icon)) return icon;
  const paths = ICONS[icon] || ICONS.trend;
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, paths);
}
function FeatureCard({
  index,
  title,
  children,
  href,
  icon = 'trend',
  style,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `fcard${href ? ' fcard--link' : ''}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PointerGlow, {
    variant: "teal"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fcard__content"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 'var(--s-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-text)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Pictogram, {
    icon: icon
  })), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--accent-text)'
    }
  }, String(index).padStart(2, '0'))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-semibold)',
      fontSize: 'var(--t-h3)',
      letterSpacing: '-0.015em',
      lineHeight: 'var(--lh-head)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'var(--s-5)',
      color: 'var(--text-body)',
      fontSize: 'var(--t-body)',
      lineHeight: 'var(--lh-body)',
      marginBottom: 0
    }
  }, children), href && /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      marginTop: 'var(--s-5)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5em',
      color: 'var(--accent-text)',
      fontWeight: 'var(--w-medium)',
      textDecoration: 'none'
    }
  }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 ", /*#__PURE__*/React.createElement("span", {
    className: "fcard__arw"
  }, "\u2197"))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/PricingCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — PricingCard. A single plan in a pricing row. Borderless by
 * design: tiers lift through TONE, not outlines. The featured plan sits on the
 * signature brand gradient with white text and a primary button; other tiers
 * use a secondary button — so the row carries an accent without any ring.
 *
 * On hover the card lifts and (on toned tiers) tone-steps, and the shared
 * PointerGlow tracks the cursor: a teal glow on the toned tiers, and a soft
 * brightening white glow (no darkening) on the featured gradient surface —
 * matching the FeatureCard interaction.
 *
 * Depth from contrast and gradient, never elevation or lines.
 */
const STYLE_ID = 'cl-pcard-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.pcard { transition: background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
.pcard:hover { transform: translateY(-4px); }
.pcard--toned { background:var(--surface-1); }
.pcard--toned:hover { background:var(--surface-2); }
@media (prefers-reduced-motion: reduce) {
  .pcard { transition:none !important; }
  .pcard:hover { transform:none; }
}`;
  document.head.appendChild(el);
}
function PricingCard({
  tier,
  price,
  description,
  features = [],
  cta = {},
  badge,
  featured = false,
  style,
  ...rest
}) {
  const fg = featured ? '#FFFFFF' : 'var(--text-strong)';
  const muted = featured ? 'rgba(255,255,255,0.78)' : 'var(--text-muted)';
  const body = featured ? 'rgba(255,255,255,0.82)' : 'var(--text-body)';
  React.useEffect(ensureStyles, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `pcard ${featured ? 'brand-flow' : 'pcard--toned'}`,
    style: {
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      display: 'flex',
      borderRadius: 'var(--r-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PointerGlow, {
    variant: featured ? 'light' : 'teal'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-5)',
      padding: 'clamp(1.75rem, 2.5vw, 2.5rem)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: muted
    }
  }, tier), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: featured ? '#FFFFFF' : 'var(--accent-text)',
      background: featured ? 'rgba(255,255,255,0.18)' : 'rgba(31,163,154,0.16)',
      borderRadius: 'var(--r-2)',
      padding: '6px 10px'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 'var(--t-h2)',
      letterSpacing: 'var(--ls-head)',
      color: fg
    }
  }, price), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--t-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: body
    }
  }, description), features.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)',
      marginTop: 'var(--s-2)'
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontSize: 'var(--t-body-sm)',
      color: body
    }
  }, "\u2192 ", f))), cta.label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--s-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: cta.variant || (featured ? 'primary' : 'secondary'),
    size: "md",
    href: cta.href,
    icon: cta.icon
  }, cta.label))));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ProcessStep.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — ProcessStep. One numbered row of a process / timeline:
 * a large teal index + optional mono meta label sit in the left rail, the
 * title + body in the right column. A hairline rule runs along the top of
 * every row, so a stack of these reads as a list.
 *
 * Shares SectionHeader's two-column grid (1fr / 1.05fr, gap --s-8), so the
 * step title + description line up on the SAME left edge as the section
 * heading's title above. Token-driven (reads on light or dark); stacks to one
 * column on narrow viewports.
 */
const STYLE_ID = 'cl-pstep-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.cl-pstep { display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1.05fr); gap: var(--s-8);
  align-items:start; padding: var(--s-7) 0; border-top:1px solid var(--border-faint); }
.cl-pstep:last-child { border-bottom:1px solid var(--border-faint); }
/* left rail: big index + mono meta, bunched to the left of the column */
.cl-pstep__rail { display:flex; align-items:flex-start; gap: var(--s-5); min-width:0; }
.cl-pstep__index { flex:none; font-family:var(--font-display); font-weight:var(--w-bold);
  font-size:var(--t-h1); line-height:0.9; letter-spacing:var(--ls-head); color:var(--accent-text);
  font-variant-numeric: tabular-nums; }
.cl-pstep__meta { font-family:var(--font-mono); font-size:var(--t-mono-sm);
  letter-spacing:var(--ls-eyebrow); text-transform:uppercase; color:var(--text-muted);
  padding-top:0.55em; }
.cl-pstep__body { display:flex; flex-direction:column; gap: var(--s-4); min-width:0; }
.cl-pstep__title { margin:0; font-family:var(--font-display); font-weight:var(--w-semibold);
  font-size:var(--t-h3); line-height:var(--lh-head); letter-spacing:var(--ls-head);
  color:var(--text-strong); }
.cl-pstep__text { margin:0; max-width:48ch; font-size:var(--t-body); line-height:var(--lh-body);
  color:var(--text-body); }
@media (max-width: 880px) {
  .cl-pstep { grid-template-columns: 1fr; gap: var(--s-5); }
}`;
  document.head.appendChild(el);
}
function ProcessStep({
  index,
  meta,
  title,
  children,
  style,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  const idx = index == null ? null : typeof index === 'number' ? String(index).padStart(2, '0') : index;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "cl-pstep",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cl-pstep__rail"
  }, idx != null && /*#__PURE__*/React.createElement("span", {
    className: "cl-pstep__index"
  }, idx), meta && /*#__PURE__*/React.createElement("span", {
    className: "cl-pstep__meta"
  }, meta)), /*#__PURE__*/React.createElement("div", {
    className: "cl-pstep__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "cl-pstep__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "cl-pstep__text"
  }, children)));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — SectionHeader. The standard masthead for a section:
 * a zero-padded mono index and a hairline rule run along the left, a mono
 * label sits mid-row, and the display title + optional lead occupy the
 * right column. Collapses to a single stacked column on narrow viewports.
 *
 * Colour comes entirely from semantic tokens, so the same component reads
 * correctly on a light or a dark section without a variant.
 */
const STYLE_ID = 'cl-sectionhead-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.cl-shead { display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1.05fr); gap: var(--s-8);
  align-items:start; --shead-size: var(--t-h2); --shead-lh: var(--lh-head); }
/* meta row matches the title's FIRST line box and centres within it, so the
   index, rule and label always sit on the first line of the headline — at any
   title size — instead of floating above a too-tall cap. */
.cl-shead__meta { display:flex; align-items:center; gap: var(--s-5); min-width:0;
  min-height: calc(var(--shead-size) * var(--shead-lh)); }
.cl-shead__index { flex:none; font-family:var(--font-mono); font-size:var(--t-mono-sm);
  letter-spacing:var(--ls-mono); color:var(--accent-text); }
.cl-shead__rule { flex:1 1 auto; height:1px; background:var(--border-subtle); min-width: var(--s-6); }
.cl-shead__label { flex:none; font-family:var(--font-mono); font-size:var(--t-mono-sm);
  letter-spacing:var(--ls-eyebrow); text-transform:uppercase; color:var(--text-muted); }
.cl-shead__body { display:flex; flex-direction:column; gap:var(--s-5); min-width:0; }
.cl-shead__title { margin:0; font-family:var(--font-display); font-weight:var(--w-bold);
  font-size:var(--shead-size); line-height:var(--shead-lh); letter-spacing:var(--ls-head);
  color:var(--text-strong); text-wrap:balance; }
.cl-shead__lead { margin:0; max-width:46ch; font-size:var(--t-lead); line-height:1.35;
  color:var(--text-body); }
/* xl: monument scale for hero-adjacent section mastheads */
.cl-shead--xl { --shead-size: var(--t-display); --shead-lh: var(--lh-snug); }
.cl-shead--xl .cl-shead__title { letter-spacing:var(--ls-display); }
/* lg: larger headline when a section needs more presence */
.cl-shead--lg { --shead-size: var(--t-h1); --shead-lh: var(--lh-snug); }
.cl-shead--lg .cl-shead__title { letter-spacing:var(--ls-display); }
/* sm: compact title for dense sections */
.cl-shead--sm { --shead-size: var(--t-h3); --shead-lh: var(--lh-head); }
.cl-shead--sm .cl-shead__title { font-weight:var(--w-semibold); }
@media (max-width: 880px) {
  .cl-shead { grid-template-columns: 1fr; gap: var(--s-6); }
  .cl-shead__meta { min-height:0; }
}`;
  document.head.appendChild(el);
}
function SectionHeader({
  index,
  label,
  title,
  children,
  size = 'md',
  style,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  const idx = index == null ? null : typeof index === 'number' ? String(index).padStart(2, '0') : index;
  const sizeClass = {
    sm: ' cl-shead--sm',
    lg: ' cl-shead--lg',
    xl: ' cl-shead--xl'
  }[size] || '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `cl-shead${sizeClass}`,
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cl-shead__meta"
  }, idx != null && /*#__PURE__*/React.createElement("span", {
    className: "cl-shead__index"
  }, idx), /*#__PURE__*/React.createElement("span", {
    className: "cl-shead__rule",
    "aria-hidden": "true"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "cl-shead__label"
  }, label)), /*#__PURE__*/React.createElement("div", {
    className: "cl-shead__body"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "cl-shead__title"
  }, title), children && /*#__PURE__*/React.createElement("p", {
    className: "cl-shead__lead"
  }, children)));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — Stat. Big metric set in the display face with a mono label.
 * Numbers are first-class content; set them large.
 *
 * size: 'md' (default) — section-proof scale; 'lg' — monument scale for a
 * hero stat grid (see StatGrid). The suffix rides at a reduced size.
 */
const SIZES = {
  md: 'clamp(2.5rem, 5vw, 4.25rem)',
  lg: 'clamp(3.25rem, 6.5vw, 5.75rem)'
};
function Stat({
  value,
  label,
  suffix = '',
  grad = false,
  size = 'md',
  align = 'start',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)',
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: SIZES[size] || SIZES.md,
      lineHeight: 0.9,
      letterSpacing: '-0.03em',
      color: grad ? 'transparent' : 'var(--text-strong)',
      background: grad ? 'var(--grad-brand)' : 'none',
      WebkitBackgroundClip: grad ? 'text' : 'border-box',
      backgroundClip: grad ? 'text' : 'border-box'
    }
  }, value, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.62em',
      verticalAlign: 'baseline'
    }
  }, suffix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/StatGrid.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — StatGrid. A grid of monument-scale stats: big display
 * numbers over mono labels, laid out in `columns` columns with generous
 * rhythm. Pass `stats` as an array of { value, suffix, label, grad }; any
 * value can be a node (e.g. "RS·RU"), and `grad` fills that number with the
 * brand gradient.
 *
 * Pairs naturally with a left intro column (text on the left, this on the
 * right) for an "about / who's behind it" section, or stands alone.
 */
function StatGrid({
  stats = [],
  columns = 2,
  size = 'lg',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
      gap: 'var(--s-9) var(--s-8)',
      ...style
    }
  }, rest), stats.map((s, i) => /*#__PURE__*/React.createElement(__ds_scope.Stat, {
    key: i,
    value: s.value,
    suffix: s.suffix,
    label: s.label,
    grad: s.grad,
    size: size
  })));
}
Object.assign(__ds_scope, { StatGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — Tag. Mono technical chip on a toned surface, small radius,
 * NO border. Use for capability/stack labels (WebGL, 3D, RU·EN). No pill shape.
 */
function Tag({
  children,
  accent = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4em',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: accent ? 'var(--accent-text)' : 'var(--text-body)',
      background: accent ? 'rgba(31,163,154,0.16)' : 'var(--surface-2)',
      borderRadius: 'var(--r-2)',
      padding: '6px 10px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/TestimonialCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — TestimonialCard. A quote on a toned surface, borderless,
 * with the author below. On hover the card tone-steps and lifts, and the
 * shared PointerGlow tracks the cursor — matching the FeatureCard /
 * PricingCard interaction.
 *
 * Depth from tone, never elevation or lines.
 */
const STYLE_ID = 'cl-tcard-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.tcard { background:var(--surface-1);
  transition: background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out); }
.tcard:hover { background:var(--surface-2); transform: translateY(-4px); }
@media (prefers-reduced-motion: reduce) {
  .tcard { transition:none !important; }
  .tcard:hover { transform:none; }
}`;
  document.head.appendChild(el);
}
function TestimonialCard({
  quote,
  author,
  role,
  children,
  style,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: "tcard",
    style: {
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      margin: 0,
      borderRadius: 'var(--r-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PointerGlow, {
    variant: "teal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)',
      padding: 'clamp(1.75rem, 2.5vw, 2.75rem)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-semibold)',
      fontSize: 'var(--t-h3)',
      lineHeight: 'var(--lh-head)',
      letterSpacing: 'var(--ls-head)',
      color: 'var(--text-strong)'
    }
  }, quote || children), (author || role) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--t-body)',
      color: 'var(--text-strong)'
    }
  }, author), role && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/SelectField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — SelectField. Native select styled to match TextField, with a
 * mono label and a custom chevron. Hairline border warms to teal on focus.
 */
function SelectField({
  label,
  id,
  value,
  defaultValue,
  onChange,
  options = [],
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-text)'
    }
  }, " *")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      appearance: 'none',
      WebkitAppearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--t-body)',
      color: 'var(--text-strong)',
      background: focus ? 'var(--surface-3)' : 'var(--surface-2)',
      border: 'none',
      borderBottom: `2px solid ${focus ? 'var(--accent-text)' : 'transparent'}`,
      borderRadius: 'var(--r-2)',
      padding: '15px 40px 15px 16px',
      outline: 'none',
      cursor: 'pointer',
      transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
    }
  }, rest), options.map(o => {
    const val = typeof o === 'string' ? o : o.value;
    const lbl = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: val,
      value: val,
      style: {
        background: '#1E2C33'
      }
    }, lbl);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--accent-text)',
      pointerEvents: 'none',
      fontSize: '12px'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { SelectField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SelectField.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — TextField. Dark input on a toned surface, hairline border
 * that warms to teal on focus, small radius, no shadow. Mono label above.
 * Supports textarea via `multiline`.
 */
function TextField({
  label,
  id,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  multiline = false,
  rows = 4,
  required = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputStyle = {
    width: '100%',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--t-body)',
    color: 'var(--text-strong)',
    background: focus ? 'var(--surface-3)' : 'var(--surface-2)',
    border: 'none',
    borderBottom: `2px solid ${focus ? 'var(--accent-text)' : 'transparent'}`,
    borderRadius: 'var(--r-2)',
    padding: multiline ? '14px 16px' : '15px 16px',
    outline: 'none',
    resize: multiline ? 'vertical' : undefined,
    transition: 'background var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-text)'
    }
  }, " *")), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: inputStyle
  }, rest)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/layout/CtaBanner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — CtaBanner. A full-width closing call-to-action on the
 * signature brand gradient (animated, looping) with a pointer-tracking
 * brightening glow. Title + lead + one inverted action button.
 */
function CtaBanner({
  title,
  lead,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "brand-flow",
    "data-reveal": true,
    style: {
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      borderRadius: 'var(--r-4)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.PointerGlow, {
    variant: "light"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      padding: 'clamp(2.5rem, 6vw, 6rem)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 'var(--s-6)'
    }
  }, title && /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: '18ch',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: 'var(--t-h1)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-head)',
      color: '#FFFFFF',
      textWrap: 'balance'
    }
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: '44ch',
      fontSize: 'var(--t-lead)',
      lineHeight: 1.35,
      color: 'rgba(255,255,255,0.85)'
    }
  }, lead), action && (action.label ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "invert",
    size: "lg",
    href: action.href,
    icon: action.icon !== false
  }, action.label) : action)));
}
Object.assign(__ds_scope, { CtaBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/CtaBanner.jsx", error: String((e && e.message) || e) }); }

// components/layout/Faq.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — Faq + FaqItem. A stack of disclosure rows with hairline
 * separators and smooth open/close (the system `.disclosure` utility). The
 * marker rotates from + to × on open.
 *
 * Compose explicitly:
 *   <Faq><FaqItem q="…">answer</FaqItem> …</Faq>
 * or pass `items` as an array of { q, a } to <Faq>.
 */
const STYLE_ID = 'cl-faq-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.cl-faq__row { border-top:1px solid var(--border-subtle); }
.cl-faq__row:last-child { border-bottom:1px solid var(--border-subtle); }
.cl-faq__row > summary { list-style:none; cursor:pointer;
  display:flex; align-items:center; justify-content:space-between; gap:var(--s-5); padding:var(--s-6) 0; }
.cl-faq__row > summary::-webkit-details-marker { display:none; }
.cl-faq__q { font-family:var(--font-display); font-weight:var(--w-semibold); font-size:var(--t-h3);
  letter-spacing:var(--ls-head); color:var(--text-strong); }
.cl-faq__mark { flex:none; font-size:1.5rem; line-height:1; color:var(--accent-text);
  transition: transform var(--dur-base) var(--ease-out); }
.cl-faq__row[open] .cl-faq__mark { transform: rotate(45deg); }
.cl-faq__a { margin:0 0 var(--s-6); font-size:var(--t-body); line-height:var(--lh-body);
  color:var(--text-body); max-width:60ch; }
/* Align the row stack to the SectionHeader title column: same 2-col grid,
   list lives in the right column so its left edge meets the headline. */
.cl-faq { display:grid; grid-template-columns: minmax(0,1fr) minmax(0,1.05fr); gap: var(--s-8); }
.cl-faq__list { grid-column: 2; display:flex; flex-direction:column; min-width:0; }
@media (max-width: 880px) {
  .cl-faq { grid-template-columns: 1fr; }
  .cl-faq__list { grid-column: 1; }
}`;
  document.head.appendChild(el);
}
function FaqItem({
  q,
  children,
  delay,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  return /*#__PURE__*/React.createElement("details", _extends({
    className: "cl-faq__row disclosure",
    "data-reveal": true,
    "data-delay": delay
  }, rest), /*#__PURE__*/React.createElement("summary", null, /*#__PURE__*/React.createElement("span", {
    className: "cl-faq__q"
  }, q), /*#__PURE__*/React.createElement("span", {
    className: "cl-faq__mark",
    "aria-hidden": "true"
  }, "+")), /*#__PURE__*/React.createElement("p", {
    className: "cl-faq__a"
  }, children));
}
function Faq({
  items,
  style,
  children,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "cl-faq",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "cl-faq__list"
  }, items ? items.map((it, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    q: it.q,
    delay: i * 80
  }, it.a)) : children));
}
Object.assign(__ds_scope, { FaqItem, Faq });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Faq.jsx", error: String((e && e.message) || e) }); }

// components/layout/Hero.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — Hero. Full-height opening shell: a background slot, layered
 * brand wash + legibility scrim, a centred content column, and a scroll hint.
 *
 * Foreground copy is passed as CHILDREN (so it stays editable template markup
 * in templates), wrapped in the content column. Author the eyebrow / headline /
 * lead / actions inside, using the `.focus-in` classes for the staggered
 * entrance. Pass a background node as `media` (a looping video / 3D scene);
 * omit it for the default checker placeholder.
 */
function Hero({
  id = 'top',
  media,
  mediaLabel = '▦ hero video / 3D scene',
  scrim = true,
  scrollHint = 'Листайте',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      ...style
    }
  }, rest), media || /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'repeating-linear-gradient(45deg, #0A1113 0 14px, #131E22 14px 28px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'radial-gradient(120% 90% at 78% 8%, rgba(31,163,154,0.20) 0%, rgba(10,110,140,0.10) 35%, rgba(10,14,15,0) 68%)'
    }
  }), scrim && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(5,8,10,0.86) 0%, rgba(5,8,10,0.55) 44%, rgba(5,8,10,0.12) 100%)'
    }
  }), mediaLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 'var(--gutter)',
      bottom: '28px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.75rem',
      letterSpacing: '0.08em',
      color: 'var(--text-muted)',
      textTransform: 'uppercase'
    }
  }, mediaLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'min(92vw, 800px)'
    }
  }, children)), scrollHint && /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      position: 'absolute',
      left: '50%',
      bottom: '28px',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      animation: 'cl-hero-bounce 1.8s var(--ease-inout) infinite'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, scrollHint), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.25rem',
      color: 'var(--accent-text)',
      lineHeight: 1
    }
  }, "\u2193")));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Hero.jsx", error: String((e && e.message) || e) }); }

// components/layout/LogoWall.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — LogoWall. A "trusted by" strip: a mono label over a
 * responsive grid of logo slots. Pass `logos` as an array of nodes (img / svg
 * / text); omit it to render `count` empty placeholder cells.
 */
function LogoWall({
  label = 'С нами работают',
  logos,
  count = 6,
  style,
  ...rest
}) {
  const items = logos && logos.length ? logos : Array.from({
    length: count
  }, () => 'LOGO');
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-reveal": true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-6)',
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: 'var(--s-5)',
      alignItems: 'center'
    }
  }, items.map((node, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: '60px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--r-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-body-sm)',
      letterSpacing: '0.04em',
      color: 'var(--text-muted)'
    }
  }, node))));
}
Object.assign(__ds_scope, { LogoWall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/LogoWall.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — Section. The standard page section wrapper: centred content
 * column (max-width var(--content-max)), gutter padding, and the vertical
 * rhythm tokens. Drop any blocks inside. Use this for every section of a page
 * so spacing stays consistent.
 *
 *  - tight    — uses the tighter vertical padding (proof rows, logo walls).
 *  - flush    — removes vertical padding (when the child supplies its own).
 *  - divided  — hairline rule along the top edge.
 *
 *  - tone     — full-bleed background band behind the centred column. Use to
 *               give a long page rhythm so not every section reads identically.
 *               Dark tones keep the standard light text; 'invert' is a light
 *               band that re-themes its descendants to dark text via the
 *               `cl-tone-invert` scope (components reading the design tokens
 *               flip automatically).
 *                 'page'   — page base (default, no band)
 *                 'alt'    — one step off the base
 *                 'panel'  — deep near-black band (feature/stat bands)
 *                 'invert' — light/paper band with dark text
 */
const TONES = {
  page: {
    bg: 'transparent'
  },
  alt: {
    bg: 'var(--bg-page-alt)'
  },
  panel: {
    bg: 'var(--ink-900)'
  },
  invert: {
    bg: 'var(--surface-invert)',
    cls: 'cl-tone-invert'
  }
};
const STYLE_ID = 'cl-section-tone-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  // On a light band, remap the dark-base semantic tokens to their paper
  // equivalents so every descendant component (cards, headers, dividers)
  // flips to dark-on-light without per-component changes.
  el.textContent = `
.cl-tone-invert {
  --text-strong: var(--fg-on-paper-1);
  --text-body: var(--fg-on-paper-2);
  --text-muted: var(--fg-on-paper-3);
  --text-faint: var(--fg-on-paper-3);
  --bg-page: var(--paper-050);
  --bg-page-alt: var(--paper-100);
  --surface-1: var(--paper-000);
  --surface-2: var(--paper-100);
  --surface-3: var(--paper-200);
  --border-subtle: var(--paper-200);
  --border-faint: var(--paper-100);
  --border-strong: var(--fg-on-paper-3);
  --accent-text: var(--teal-600);
  --accent-text-hover: var(--teal-500);
  color: var(--text-strong);
}`;
  document.head.appendChild(el);
}
function Section({
  id,
  label,
  tight = false,
  flush = false,
  divided = false,
  tone = 'page',
  style,
  children,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  const padY = flush ? '0' : tight ? 'var(--section-y-tight)' : 'var(--section-y)';
  const t = TONES[tone] || TONES.page;
  const banded = tone && tone !== 'page';
  const inner = /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: `${padY} var(--gutter)`,
      ...(divided ? {
        borderTop: '1px solid var(--border-subtle)'
      } : null),
      ...style
    }
  }, children);

  // No band: keep the original flat structure (the section IS the column).
  if (!banded) {
    return /*#__PURE__*/React.createElement("section", _extends({
      id: id,
      "data-screen-label": label,
      style: {
        maxWidth: 'var(--content-max)',
        margin: '0 auto',
        padding: `${padY} var(--gutter)`,
        ...(divided ? {
          borderTop: '1px solid var(--border-subtle)'
        } : null),
        ...style
      }
    }, rest), children);
  }

  // Banded: full-bleed outer carries the tone, inner is the centred column.
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    "data-screen-label": label,
    className: t.cls,
    style: {
      width: '100%',
      background: t.bg
    }
  }, rest), inner);
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — SiteFooter. Wordmark + tagline on the left, link columns on
 * the right, a hairline divider on top and a fine-print line at the bottom.
 * Pass `columns` as an array of { title, links: [{ href, label }] }.
 */
function SiteFooter({
  brand = 'chipsa',
  tagline,
  columns = [],
  legal,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: 'var(--section-y-tight) var(--gutter) var(--s-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 'var(--s-7)',
      paddingTop: 'var(--s-6)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)',
      maxWidth: '32ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--w-bold)',
      fontSize: '1.25rem',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)'
    }
  }, brand), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-muted)'
    }
  }, tagline)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--s-8)',
      flexWrap: 'wrap'
    }
  }, columns.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--s-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, col.title), (col.links || []).map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href,
    className: "link",
    style: {
      fontSize: 'var(--t-body-sm)'
    }
  }, l.label)))))), legal && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--s-7)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--t-mono-sm)',
      letterSpacing: 'var(--ls-mono)',
      color: 'var(--text-faint)'
    }
  }, legal));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/logoData.js
try { (() => {
const chipsaLogo = "data:image/png;base64,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";
Object.assign(__ds_scope, { chipsaLogo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/logoData.js", error: String((e && e.message) || e) }); }

// components/layout/SiteNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chipsa Lander — SiteNav. Responsive site navigation.
 *
 * DESKTOP (>900px): fixed top bar — logo lockup left, centred link menu,
 * primary CTA right. Left/right page insets are symmetric (both --gutter).
 *
 * MOBILE (≤900px): the top bar collapses to a single floating action button
 * anchored to the BOTTOM-RIGHT. Tapping it morphs the hamburger into a close
 * (✕) and opens a bottom-right panel: logo at top, the links stacked and
 * right-aligned, a contact row, and the CTA. A dimmed/blurred scrim sits behind.
 *
 * Props: `links` [{ href, label }], `cta` { label, href }, `contact`
 * { label, value, href } for the panel's contact row. Override the logo image
 * with `logo` and the suffix tag with `brandMark`.
 */
const STYLE_ID = 'cl-sitenav-styles';
function ensureStyles() {
  if (typeof document === 'undefined' || document.getElementById(STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = STYLE_ID;
  el.textContent = `
.cl-nav { position:fixed; top:0; left:0; right:0; z-index:200;
  display:grid; grid-template-columns:1fr auto 1fr; align-items:center; padding:20px clamp(14px, 1.4vw, 22px); }
.cl-nav__menu { justify-self:center; display:flex; gap:var(--s-6); align-items:center; }
.cl-nav__cta { justify-self:end; }

/* ---- mobile fab + panel (hidden on desktop) ---- */
.cl-mnav { display:none; }
.cl-mnav__fab { position:fixed; z-index:240; right:clamp(16px,4vw,24px); bottom:clamp(16px,4vw,24px);
  width:64px; height:64px; border:none; border-radius:var(--r-2); cursor:pointer;
  display:inline-flex; align-items:center; justify-content:center; padding:0;
  background:var(--teal-500); color:#fff;
  transition: background var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-expo);
  box-shadow: var(--shadow-2, 0 10px 30px rgba(0,0,0,0.35)); }
.cl-mnav__fab:active { transform: scale(0.94); }
.cl-mnav[data-open="true"] .cl-mnav__fab { background:var(--ink-700); }
.cl-mnav__bars { position:relative; width:26px; height:18px; }
.cl-mnav__bars span { position:absolute; left:0; right:0; height:2.5px; border-radius:2px; background:currentColor;
  transition: transform 360ms var(--ease-expo), opacity 200ms var(--ease-out), top 360ms var(--ease-expo); }
.cl-mnav__bars span:nth-child(1) { top:0; }
.cl-mnav__bars span:nth-child(2) { top:7.75px; }
.cl-mnav__bars span:nth-child(3) { top:15.5px; }
.cl-mnav[data-open="true"] .cl-mnav__bars span:nth-child(1) { top:7.75px; transform: rotate(45deg); }
.cl-mnav[data-open="true"] .cl-mnav__bars span:nth-child(2) { opacity:0; transform: scaleX(0.2); }
.cl-mnav[data-open="true"] .cl-mnav__bars span:nth-child(3) { top:7.75px; transform: rotate(-45deg); }

.cl-mnav__scrim { position:fixed; inset:0; z-index:230; background:rgba(6,12,14,0.55);
  backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
  opacity:0; pointer-events:none; transition: opacity var(--dur-base) var(--ease-out); }
.cl-mnav[data-open="true"] .cl-mnav__scrim { opacity:1; pointer-events:auto; }

.cl-mnav__panel { position:fixed; z-index:235;
  right:clamp(16px,4vw,24px); bottom:calc(clamp(16px,4vw,24px) + 64px + 16px);
  width:min(420px, calc(100vw - 32px)); max-height:calc(100vh - 64px - 64px);
  display:flex; flex-direction:column; gap:var(--s-5);
  padding:clamp(24px,6vw,32px); border-radius:var(--r-4);
  background:var(--surface-1); box-shadow: var(--shadow-3, 0 24px 70px rgba(0,0,0,0.5));
  transform-origin: bottom right; transform: translateY(12px) scale(0.96); opacity:0;
  pointer-events:none; overflow-y:auto;
  transition: transform 420ms var(--ease-expo), opacity 260ms var(--ease-out); }
.cl-mnav[data-open="true"] .cl-mnav__panel { transform: translateY(0) scale(1); opacity:1; pointer-events:auto; }

.cl-mnav__logo { display:inline-flex; align-items:center; gap:10px; align-self:flex-start; text-decoration:none; }
.cl-mnav__rule { height:1px; background:var(--border-subtle); border:0; margin:0; }
.cl-mnav__links { display:flex; flex-direction:column; align-items:flex-end; gap:clamp(14px,3.5vw,22px);
  text-align:right; padding:var(--s-2) 0; }
.cl-mnav__link { font-family:var(--font-sans); font-weight:var(--w-semibold);
  font-size:clamp(1.25rem, 5vw, 1.5rem); letter-spacing:-0.01em; line-height:1; color:var(--text-strong);
  text-decoration:none; transition: color var(--dur-fast) var(--ease-out); }
.cl-mnav__link:hover { color:var(--accent-text); }
.cl-mnav__contact { display:flex; align-items:baseline; justify-content:space-between; gap:var(--s-4); }
.cl-mnav__contact-k { font-family:var(--font-mono); font-size:0.75rem; letter-spacing:0.14em;
  text-transform:uppercase; color:var(--text-muted); }
.cl-mnav__contact-v { font-family:var(--font-mono); font-size:0.875rem; letter-spacing:0.06em;
  color:var(--accent-text); text-decoration:none; }

@media (max-width: 900px) {
  .cl-nav { display:none; }
  .cl-mnav { display:block; }
}`;
  document.head.appendChild(el);
}
function LogoLockup({
  logo,
  brand,
  brandMark,
  className,
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: brand,
    style: {
      height: '28px',
      width: 'auto',
      display: 'block'
    }
  }), brandMark && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.625rem',
      letterSpacing: '0.12em',
      color: 'var(--accent-deep)',
      alignSelf: 'flex-end',
      paddingBottom: '4px'
    }
  }, brandMark));
}
function SiteNav({
  logo = __ds_scope.chipsaLogo,
  brand = 'Chipsa',
  brandMark = 'DEV',
  links = [],
  cta,
  contact,
  style,
  ...rest
}) {
  React.useEffect(ensureStyles, []);
  const [open, setOpen] = React.useState(false);

  // Lock body scroll while the mobile panel is open.
  React.useEffect(() => {
    if (typeof document === 'undefined') return;
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);
  const close = () => setOpen(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", _extends({
    className: "cl-nav",
    "data-reveal": true,
    style: style
  }, rest), /*#__PURE__*/React.createElement(LogoLockup, {
    logo: logo,
    brand: brand,
    brandMark: brandMark,
    style: {
      justifySelf: 'start',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "cl-nav__menu"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    className: "link",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: '1.0625rem'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "cl-nav__cta"
  }, cta && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    href: cta.href,
    icon: true
  }, cta.label))), /*#__PURE__*/React.createElement("div", {
    className: "cl-mnav",
    "data-open": open ? 'true' : 'false'
  }, /*#__PURE__*/React.createElement("div", {
    className: "cl-mnav__scrim",
    onClick: close,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cl-mnav__panel",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": brand
  }, /*#__PURE__*/React.createElement(LogoLockup, {
    logo: logo,
    brand: brand,
    brandMark: brandMark,
    className: "cl-mnav__logo"
  }), /*#__PURE__*/React.createElement("hr", {
    className: "cl-mnav__rule"
  }), /*#__PURE__*/React.createElement("nav", {
    className: "cl-mnav__links"
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: l.href,
    className: "cl-mnav__link",
    onClick: close
  }, l.label))), /*#__PURE__*/React.createElement("hr", {
    className: "cl-mnav__rule"
  }), contact && /*#__PURE__*/React.createElement("div", {
    className: "cl-mnav__contact"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-mnav__contact-k"
  }, contact.label), /*#__PURE__*/React.createElement("a", {
    className: "cl-mnav__contact-v",
    href: contact.href
  }, contact.value, " \u2197")), cta && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "md",
    href: cta.href,
    icon: true,
    onClick: close
  }, cta.label))), /*#__PURE__*/React.createElement("button", {
    className: "cl-mnav__fab",
    "aria-label": open ? 'Закрыть меню' : 'Открыть меню',
    "aria-expanded": open,
    onClick: () => setOpen(v => !v)
  }, /*#__PURE__*/React.createElement("span", {
    className: "cl-mnav__bars",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement("span", null)))));
}
Object.assign(__ds_scope, { SiteNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteNav.jsx", error: String((e && e.message) || e) }); }

// reveal.js
try { (() => {
// Chipsa Lander — scroll-reveal runtime. Ships with the design system and is
// loaded by ds-base.js. Pairs with the `.reveal` / `[data-reveal]` rules in
// tokens/base.css: elements fade-rise in once as they enter the viewport.
//
// Deliberately does NOT rely on IntersectionObserver — in capture/preview and
// some embedded contexts IO callbacks never fire, which would leave every
// revealed block stuck hidden. Instead it measures with getBoundingClientRect
// on load + scroll + resize + DOM mutations (components mount async), and has a
// hard failsafe that reveals everything after a short delay so content can
// NEVER stay invisible.
//
// The hidden state in CSS is gated on `html.js-reveal`, which this file adds
// immediately — so if the script never runs at all, nothing is hidden.
(() => {
  const root = document.documentElement;
  if (root.dataset.clReveal) return; // guard against double-load (bundle + ds-base.js)
  root.dataset.clReveal = '1';
  root.classList.add('js-reveal');
  const SEL = '.reveal, [data-reveal]';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const seen = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
  const isSeen = el => seen ? seen.has(el) : el.hasAttribute('data-inview');
  const mark = el => {
    if (seen) seen.add(el);
  };
  const show = el => {
    if (isSeen(el)) return;
    mark(el);
    const d = el.getAttribute('data-delay');
    if (d) el.style.transitionDelay = /m?s$/.test(d) ? d : d + 'ms';
    el.setAttribute('data-inview', '');
  };
  const showAll = () => {
    document.querySelectorAll(SEL).forEach(show);
    // Guarantee the focus-in entrance has reached its visible end-state too —
    // in capture/preview contexts the animation engine may never advance, which
    // would leave focus-in copy (e.g. a hero headline) stuck transparent.
    root.classList.add('reveal-settled');
  };

  // Reveal every not-yet-seen element whose top is within `ratio` of the
  // viewport height (and whose bottom is still on/below the top edge).
  const revealInView = ratio => {
    const vh = window.innerHeight || root.clientHeight;
    document.querySelectorAll(SEL).forEach(el => {
      if (isSeen(el)) return;
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh * ratio) show(el);
    });
  };
  let scheduled = false;
  const check = () => {
    scheduled = false;
    revealInView(0.92); // top within lower ~92% of viewport
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    (window.requestAnimationFrame || (f => setTimeout(f, 16)))(check);
  };
  const start = () => {
    if (reduce.matches) {
      showAll();
      return;
    }
    check();
    window.addEventListener('scroll', schedule, {
      passive: true
    });
    window.addEventListener('resize', schedule, {
      passive: true
    });
    // async-mounted components (x-import) appear later — re-check on DOM changes.
    if (document.body && 'MutationObserver' in window) {
      new MutationObserver(schedule).observe(document.body, {
        childList: true,
        subtree: true
      });
    }
    // Failsafe for contexts where measurement / scrolling never happens
    // (capture tools, offscreen frames, short non-scrolling pages). It reveals
    // everything currently in/above the viewport, and — ONLY when the document
    // isn't actually scrollable (so there's no scroll left to trigger the
    // per-block reveals) — reveals all remaining blocks too. On a normal long,
    // scrollable page this leaves below-the-fold blocks hidden so they animate
    // in as the reader scrolls, instead of being force-shown off-screen.
    // Always settle the focus-in entrance so hero copy is never left transparent.
    const failsafe = () => {
      revealInView(1);
      root.classList.add('reveal-settled');
      const sc = document.scrollingElement || root;
      const scrollable = sc.scrollHeight - (window.innerHeight || root.clientHeight) > 4;
      if (!scrollable) showAll();
    };
    [1500, 3000, 6000].forEach(t => setTimeout(failsafe, t));
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "reveal.js", error: String((e && e.message) || e) }); }

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.PointerGlow = __ds_scope.PointerGlow;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.StatGrid = __ds_scope.StatGrid;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

__ds_ns.SelectField = __ds_scope.SelectField;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.CtaBanner = __ds_scope.CtaBanner;

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.Faq = __ds_scope.Faq;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LogoWall = __ds_scope.LogoWall;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteNav = __ds_scope.SiteNav;

})();
