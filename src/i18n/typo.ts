// Russian micro-typography. Glues short prepositions, conjunctions and particles
// to the word that follows them with a non-breaking space, so they can never be
// left hanging at the end of a line ("висячие предлоги"). Runs at build time —
// the resulting U+00A0 is baked straight into the static HTML, nothing ships to
// the client. The lookbehind keeps the boundary unconsumed so chains like
// "и в каком" glue every short word in the run.
const NBSP = String.fromCharCode(160);
const SHORT = [
  'а', 'в', 'во', 'и', 'из', 'к', 'ко', 'на', 'не', 'ни', 'но', 'о', 'об', 'от',
  'по', 'с', 'со', 'у', 'за', 'до', 'же', 'бы', 'ли', 'то', 'что', 'как', 'для',
  'или', 'при', 'над', 'под', 'без', 'про',
];
const GLUE = new RegExp(`(?<=^|[\\s(«"„—–-])(${SHORT.join('|')})\\s+`, 'gi');

export function typo(s: string): string {
  return s.replace(GLUE, (_m, word) => word + NBSP);
}
