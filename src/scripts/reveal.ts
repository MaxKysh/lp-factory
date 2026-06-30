// Chipsa Lander — scroll-reveal runtime. Ported from the design system's
// reveal.js. Pairs with the `.reveal` / `[data-reveal]` rules in ds-base.css:
// elements fade-rise in once as they enter the viewport.
//
// Deliberately does NOT rely on IntersectionObserver — it measures with
// getBoundingClientRect on load + scroll + resize + DOM mutations, and has a
// hard failsafe so content can NEVER stay invisible. The hidden state is gated
// on `html.js-reveal`, which this file adds immediately.
export function initReveal(): void {
  const root = document.documentElement;
  if (root.dataset.clReveal) return;
  root.dataset.clReveal = '1';
  root.classList.add('js-reveal');

  const SEL = '.reveal, [data-reveal]';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const seen = new WeakSet<Element>();
  const isSeen = (el: Element) => seen.has(el);

  const show = (el: HTMLElement) => {
    if (isSeen(el)) return;
    seen.add(el);
    const d = el.getAttribute('data-delay');
    if (d) el.style.transitionDelay = /m?s$/.test(d) ? d : d + 'ms';
    el.setAttribute('data-inview', '');
  };
  const showAll = () => {
    document.querySelectorAll<HTMLElement>(SEL).forEach(show);
    root.classList.add('reveal-settled');
  };

  const revealInView = (ratio: number) => {
    const vh = window.innerHeight || root.clientHeight;
    document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
      if (isSeen(el)) return;
      const r = el.getBoundingClientRect();
      if (r.bottom > 0 && r.top < vh * ratio) show(el);
    });
  };

  let scheduled = false;
  const check = () => {
    scheduled = false;
    revealInView(0.92);
  };
  const schedule = () => {
    if (scheduled) return;
    scheduled = true;
    (window.requestAnimationFrame || ((f: FrameRequestCallback) => setTimeout(f, 16)))(check);
  };

  const start = () => {
    if (reduce.matches) {
      showAll();
      return;
    }
    check();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    if (document.body && 'MutationObserver' in window) {
      new MutationObserver(schedule).observe(document.body, { childList: true, subtree: true });
    }
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
}
