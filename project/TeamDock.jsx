/* TeamDock — a row of team avatars stacked like a fanned row of coins.
   • Entrance: each coin flips + rises in, staggered, when scrolled into view.
   • Hover: macOS-dock magnification — the coin under the cursor and its
     neighbours scale up and lift, with smooth distance-based falloff.
   Reveal (outer span) and dock scale (inner span) live on separate nodes so
   their transforms never fight. */
const { useRef, useEffect, useState, useCallback } = React;

const DOCK_STYLE_ID = 'team-dock-styles';
function ensureDockStyles() {
  if (typeof document === 'undefined' || document.getElementById(DOCK_STYLE_ID)) return;
  const el = document.createElement('style');
  el.id = DOCK_STYLE_ID;
  el.textContent = `
.team-glint { position:absolute; inset:0; border-radius:50%; overflow:hidden; pointer-events:none; }
.team-glint::after { content:''; position:absolute; top:-60%; left:0; width:55%; height:220%;
  transform: rotate(20deg) translateX(-260%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,.55), transparent); }
.team-coin:hover .team-glint::after { animation: team-shine .85s cubic-bezier(.22,1,.36,1) forwards; }
@keyframes team-shine { to { transform: rotate(20deg) translateX(420%); } }
@media (prefers-reduced-motion: reduce) { .team-coin:hover .team-glint::after { animation: none; } }`;
  document.head.appendChild(el);
}

function TeamDock({ members = [], overlap = 0.16, boost = 0.3, radius = 2.2, maxSize = 168, minSize = 30 }) {
  const rowRef = useRef(null);
  const wrapRef = useRef(null);
  const outerRefs = useRef([]);
  const innerRefs = useRef([]);
  const centers = useRef([]);
  const [shown, setShown] = useState(false);
  const [size, setSize] = useState(92);

  const overlapPx = Math.round(size * overlap);

  // Size each coin so the overlapped row spans the full container width.
  const fit = useCallback(() => {
    const w = wrapRef.current ? wrapRef.current.clientWidth : 0;
    const n = members.length;
    if (!w || !n) return;
    const denom = 1 + (n - 1) * (1 - overlap);
    const s = Math.max(minSize, Math.min(maxSize, w / denom));
    setSize(s);
  }, [members.length, overlap, maxSize, minSize]);

  const measure = useCallback(() => {
    centers.current = innerRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.left + r.width / 2;
    });
  }, []);

  // Reveal on first scroll-in
  useEffect(() => {
    const node = rowRef.current;
    if (!node) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    fit();
    const ro = wrapRef.current && 'ResizeObserver' in window ? new ResizeObserver(fit) : null;
    if (ro && wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', fit);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', fit);
    };
  }, [fit]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, shown, size]);

  useEffect(ensureDockStyles, []);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const apply = useCallback(
    (cursorX) => {
      const R = size * radius;
      innerRefs.current.forEach((el, i) => {
        if (!el) return;
        const c = centers.current[i] || 0;
        const d = Math.abs(cursorX - c);
        const t = Math.max(0, 1 - d / R);
        const ease = t * t * (3 - 2 * t); // smoothstep
        const s = 1 + boost * ease;
        el.style.transform = `scale(${s})`;
        el.style.zIndex = String(100 + Math.round(ease * 100));
      });
    },
    [size, radius, boost]
  );

  const reset = useCallback(() => {
    innerRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.transform = 'scale(1)';
      el.style.zIndex = String(members.length - i);
    });
  }, [members.length]);

  const onMove = useCallback(
    (e) => {
      if (reduced) return;
      if (!centers.current.length) measure();
      apply(e.clientX);
    },
    [apply, measure, reduced]
  );

  return (
    <div ref={wrapRef} style={{ width: '100%' }}>
    <div
      ref={rowRef}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{
        display: 'flex',
        alignItems: 'center',
        paddingTop: size * 0.2,
        paddingBottom: size * 0.2,
        flexWrap: 'nowrap',
        width: '100%',
      }}
    >
      {members.map((m, i) => (
        <span
          key={m.src || i}
          ref={(el) => (outerRefs.current[i] = el)}
          title={m.name || undefined}
          style={{
            display: 'block',
            marginLeft: i === 0 ? 0 : -overlapPx,
            opacity: shown ? 1 : 0,
            transform: shown
              ? 'translateY(0) rotateY(0deg)'
              : 'translateY(26px) rotateY(-90deg)',
            transition: `opacity .5s var(--ease-out, cubic-bezier(.22,1,.36,1)) ${i * 65}ms, transform .62s var(--ease-out, cubic-bezier(.22,1,.36,1)) ${i * 65}ms`,
            zIndex: members.length - i,
            position: 'relative',
            perspective: 600,
          }}
        >
          <span
            className="team-coin"
            ref={(el) => (innerRefs.current[i] = el)}
            style={{
              display: 'block',
              width: size,
              height: size,
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'var(--surface-2)',
              boxShadow: '0 0 0 3px var(--bg-page)',
              transform: 'scale(1)',
              transformOrigin: 'center center',
              transition:
                'transform .22s var(--ease-out, cubic-bezier(.22,1,.36,1))',
              cursor: 'pointer',
              willChange: 'transform',
            }}
          >
            <img
              src={m.src}
              alt={m.name || ''}
              draggable="false"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                userSelect: 'none',
              }}
            />
            <span className="team-glint" aria-hidden="true" />
          </span>
        </span>
      ))}
    </div>
    </div>
  );
}

window.TeamDock = TeamDock;
