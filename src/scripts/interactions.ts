// Chipsa Lander — interaction runtime. Wires the pointer-driven hovers that the
// design system originally ran from React effects, plus the mobile-nav toggle.
// All effects write straight to CSS variables, so they never re-render anything.

// Button: write the cursor position into --mx/--my so the circular reveal mask
// and spotlight grow from the pointer (CSS in ds-components.css does the rest).
function initButtons(): void {
  document.querySelectorAll<HTMLElement>('.clbtn').forEach((btn) => {
    if (btn.dataset.clbtnBound) return;
    btn.dataset.clbtnBound = '1';
    const setPos = (e: PointerEvent) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty('--mx', `${e.clientX - r.left}px`);
      btn.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    btn.addEventListener('pointermove', setPos);
    btn.addEventListener('pointerenter', setPos);
  });
}

// PointerGlow: each .cl-pglow node tracks its positioned parent's cursor and
// toggles opacity on enter/leave.
function initPointerGlow(): void {
  document.querySelectorAll<HTMLElement>('.cl-pglow').forEach((glow) => {
    if (glow.dataset.pglowBound) return;
    glow.dataset.pglowBound = '1';
    const parent = glow.parentElement;
    if (!parent) return;
    const move = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      glow.style.setProperty('--pgx', `${e.clientX - r.left}px`);
      glow.style.setProperty('--pgy', `${e.clientY - r.top}px`);
    };
    const enter = (e: PointerEvent) => {
      move(e);
      glow.style.opacity = '1';
    };
    const leave = () => {
      glow.style.opacity = '0';
    };
    parent.addEventListener('pointerenter', enter);
    parent.addEventListener('pointermove', move);
    parent.addEventListener('pointerleave', leave);
  });
}

// Odometer: numbers with [data-odo] roll up like a physical counter when first
// scrolled into view. Each digit becomes a reel of two 0-9 cycles; the strip
// translates up by one full turn then lands on its digit, rightmost rolling
// longest for a mechanical cascade.
function initOdometers(): void {
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll<HTMLElement>('.odo[data-odo]').forEach((odo) => {
    if (odo.dataset.odoBound) return;
    odo.dataset.odoBound = '1';
    const target = odo.dataset.odo || '';
    if (!/^\d+$/.test(target)) return;
    if (reduced) {
      odo.textContent = target;
      return;
    }

    const digits = target.split('');
    odo.textContent = '';
    const strips: HTMLElement[] = [];
    digits.forEach(() => {
      const reel = document.createElement('span');
      reel.className = 'odo__reel';
      const strip = document.createElement('span');
      strip.className = 'odo__strip';
      for (let cycle = 0; cycle < 2; cycle++) {
        for (let i = 0; i <= 9; i++) {
          const cell = document.createElement('span');
          cell.className = 'odo__digit';
          cell.textContent = String(i);
          strip.appendChild(cell);
        }
      }
      reel.appendChild(strip);
      odo.appendChild(reel);
      strips.push(strip);
    });

    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      digits.forEach((d, idx) => {
        const dist = 10 + parseInt(d, 10); // one full spin, then land on the digit
        const strip = strips[idx];
        const dur = 1000 + idx * 170; // rightmost reel keeps rolling the longest
        strip.style.transition = `transform ${dur}ms var(--ease-out)`;
        // Flush the layout so the browser has a painted "from" state, then set the
        // target synchronously. Using requestAnimationFrame here was unreliable —
        // in a backgrounded tab the callback is deferred, so the reel could stay
        // stuck on its first digit (0) and never roll to its value.
        void strip.offsetHeight;
        strip.style.transform = `translateY(-${dist}em)`;
      });
    };

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            play();
            io.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      io.observe(odo);
    } else {
      play();
    }
  });
}

// Magnetic pull: inside a .cta-split block, the photo eases toward the cursor but
// is capped well within its own frame so it never drifts away from home. A rAF
// lerp smooths both the pull and the spring-back on leave. Desktop-only — on
// touch devices (no real cursor) the pull just jitters the photo on tap, so we
// gate it behind a hover-capable, fine pointer.
function initMagnetic(): void {
  if (!window.matchMedia) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) return;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (!finePointer) return;
  document.querySelectorAll<HTMLElement>('.cta-split').forEach((block) => {
    if (block.dataset.magBound) return;
    block.dataset.magBound = '1';
    const target = block.querySelector<HTMLElement>('.cta-photo > div');
    if (!target) return;

    const MAX = 26; // px — how far the photo may drift from its resting spot
    const STRENGTH = 0.18;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    let raf = 0;

    const tick = () => {
      raf = 0;
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      target.style.transform = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px)`;
      if (Math.abs(tx - cx) > 0.1 || Math.abs(ty - cy) > 0.1) raf = requestAnimationFrame(tick);
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const move = (e: PointerEvent) => {
      const r = target.getBoundingClientRect();
      const px = r.left + r.width / 2;
      const py = r.top + r.height / 2;
      let dx = (e.clientX - px) * STRENGTH;
      let dy = (e.clientY - py) * STRENGTH;
      const dist = Math.hypot(dx, dy);
      if (dist > MAX) {
        dx = (dx / dist) * MAX;
        dy = (dy / dist) * MAX;
      }
      tx = dx;
      ty = dy;
      schedule();
    };
    const leave = () => {
      tx = 0;
      ty = 0;
      schedule();
    };

    target.style.willChange = 'transform';
    block.addEventListener('pointermove', move);
    block.addEventListener('pointerleave', leave);
  });
}

// Mobile nav: floating action button toggles the bottom-right panel; scrim and
// Escape close it, body scroll locks while open.
function initMobileNav(): void {
  const mnav = document.querySelector<HTMLElement>('.cl-mnav');
  if (!mnav || mnav.dataset.mnavBound) return;
  mnav.dataset.mnavBound = '1';
  const fab = mnav.querySelector<HTMLButtonElement>('.cl-mnav__fab');
  const scrim = mnav.querySelector<HTMLElement>('.cl-mnav__scrim');
  const links = mnav.querySelectorAll<HTMLAnchorElement>('.cl-mnav__link, .cl-mnav__panel .clbtn');
  let prevOverflow = '';

  const setOpen = (open: boolean) => {
    mnav.dataset.open = open ? 'true' : 'false';
    fab?.setAttribute('aria-expanded', String(open));
    fab?.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
    if (open) {
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflow;
    }
  };

  fab?.addEventListener('click', () => setOpen(mnav.dataset.open !== 'true'));
  scrim?.addEventListener('click', () => setOpen(false));
  links.forEach((l) => l.addEventListener('click', () => setOpen(false)));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mnav.dataset.open === 'true') setOpen(false);
  });
}

// Open every link in a new tab. Only pure in-page anchors (#section) are left
// alone — those are scroll targets and must not spawn tabs.
function initNewTabLinks(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#')) return;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
}

// Cookie notice: shown until the visitor accepts; the choice persists in
// localStorage so it never nags twice.
function initCookieBanner(): void {
  const el = document.getElementById('cookie-consent');
  if (!el) return;
  try {
    if (localStorage.getItem('cookie-consent') === 'yes') {
      el.remove();
      return;
    }
  } catch {
    /* storage blocked — just show it */
  }
  el.style.display = 'flex';
  el.querySelector<HTMLButtonElement>('[data-accept]')?.addEventListener('click', () => {
    try {
      localStorage.setItem('cookie-consent', 'yes');
    } catch {
      /* ignore */
    }
    // Consent granted — kick off the Yandex.Metrika loader deferred in Base.astro.
    (window as unknown as { __loadMetrika?: () => void }).__loadMetrika?.();
    el.style.display = 'none';
  });
}

// Analytics goals: fire a Yandex.Metrika reachGoal on the key outbound actions.
function initAnalyticsGoals(): void {
  const YM_ID = 110313193;
  document.addEventListener(
    'click',
    (e) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest?.('a[href]') as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute('href') || '';
      const ym = (window as unknown as { ym?: (...args: unknown[]) => void }).ym;
      if (typeof ym !== 'function') return;
      if (/t\.me\//i.test(href)) ym(YM_ID, 'reachGoal', 'telegram');
      else if (/calendly\.com/i.test(href)) ym(YM_ID, 'reachGoal', 'book_meeting');
    },
    true
  );
}

// Lazy videos: a [data-lazyplay] video (below the fold) has no autoplay, so the
// browser never downloads it until it scrolls into view — then we start it.
function initLazyVideo(): void {
  const vids = document.querySelectorAll<HTMLVideoElement>('video[data-lazyplay]');
  if (!vids.length) return;
  if (!('IntersectionObserver' in window)) {
    vids.forEach((v) => v.play?.().catch(() => {}));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        const v = e.target as HTMLVideoElement;
        if (e.isIntersecting) v.play?.().catch(() => {});
        else v.pause?.();
      });
    },
    { threshold: 0.25 }
  );
  vids.forEach((v) => io.observe(v));
}

export function initInteractions(): void {
  const run = () => {
    initButtons();
    initPointerGlow();
    initOdometers();
    initMagnetic();
    initMobileNav();
    initNewTabLinks();
    initCookieBanner();
    initAnalyticsGoals();
    initLazyVideo();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
}
