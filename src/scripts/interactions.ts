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

export function initInteractions(): void {
  const run = () => {
    initButtons();
    initPointerGlow();
    initMobileNav();
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
}
