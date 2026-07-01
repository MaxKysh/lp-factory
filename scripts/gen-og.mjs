// Generates the Open Graph images (1200×630) for /ru and /en.
// The supplied illustration (scripts/og-bg.jpg) is the background, covered to
// 1200×630, with a left-to-right dark scrim for legibility; brand display type
// (Unbounded) sits on top with a gradient on the second word, block centred
// vertically. Run: `node scripts/gen-og.mjs` (needs the Unbounded font locally).
import sharp from 'sharp';

const W = 1200;
const H = 630;
const BG = 'scripts/og-bg.jpg';

const variants = [
  {
    out: 'public/images/og-ru.jpg',
    eyebrow: 'CHIPSA · LP FACTORY',
    line1: 'Лендинг-',
    line2: 'завод',
    tagline: 'Система производства лендингов под ваш бренд',
  },
  {
    out: 'public/images/og-en.jpg',
    eyebrow: 'CHIPSA · LP FACTORY',
    line1: 'Landing',
    line2: 'Factory',
    tagline: 'A landing-page production system for your brand',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Overlay = scrim (for text legibility over the illustration) + text. Text block
// is centred vertically; the title sits at the middle with generous air above
// (eyebrow) and below (tagline).
function overlay(v) {
  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brand" x1="0" y1="0" x2="1" y2="0.35">
      <stop offset="0%" stop-color="#6fbe56"/>
      <stop offset="48%" stop-color="#1fa39a"/>
      <stop offset="100%" stop-color="#0a6e8c"/>
    </linearGradient>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#080c0e" stop-opacity="0.95"/>
      <stop offset="52%" stop-color="#080c0e" stop-opacity="0.82"/>
      <stop offset="80%" stop-color="#080c0e" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="#080c0e" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#scrim)"/>
  <rect x="0" y="0" width="10" height="${H}" fill="url(#brand)"/>
  <text x="96" y="94" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" letter-spacing="6" fill="#57d6c8">${esc(v.eyebrow)}</text>
  <text x="90" y="292" font-family="Unbounded" font-weight="700" font-size="140" fill="#f4f7f6">${esc(v.line1)}</text>
  <text x="90" y="437" font-family="Unbounded" font-weight="700" font-size="140" fill="url(#brand)">${esc(v.line2)}</text>
  <text x="96" y="556" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#c9d4d3">${esc(v.tagline)}</text>
</svg>`;
}

const base = await sharp(BG).resize(W, H, { fit: 'cover', position: 'centre' }).toBuffer();

for (const v of variants) {
  await sharp(base)
    .composite([{ input: Buffer.from(overlay(v)), top: 0, left: 0 }])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(v.out);
  console.log('wrote', v.out);
}
