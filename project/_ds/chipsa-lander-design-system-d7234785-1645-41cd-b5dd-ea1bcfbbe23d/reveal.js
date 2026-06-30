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
  if (root.dataset.clReveal) return;        // guard against double-load (bundle + ds-base.js)
  root.dataset.clReveal = '1';
  root.classList.add('js-reveal');

  const SEL = '.reveal, [data-reveal]';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const seen = typeof WeakSet !== 'undefined' ? new WeakSet() : null;
  const isSeen = (el) => (seen ? seen.has(el) : el.hasAttribute('data-inview'));
  const mark = (el) => { if (seen) seen.add(el); };

  const show = (el) => {
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
  const revealInView = (ratio) => {
    const vh = window.innerHeight || root.clientHeight;
    document.querySelectorAll(SEL).forEach((el) => {
      if (isSeen(el)) return;
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh * ratio) show(el);
    });
  };

  let scheduled = false;
  const check = () => {
    scheduled = false;
    revealInView(0.92);   // top within lower ~92% of viewport
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    (window.requestAnimationFrame || ((f) => setTimeout(f, 16)))(check);
  };

  const start = () => {
    if (reduce.matches) { showAll(); return; }
    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    // async-mounted components (x-import) appear later — re-check on DOM changes.
    if (document.body && 'MutationObserver' in window) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
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
    [1500, 3000, 6000].forEach((t) => setTimeout(failsafe, t));
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
