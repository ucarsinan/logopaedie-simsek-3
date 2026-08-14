#!/usr/bin/env node
/**
 * Corporate-Design-Palette: Pastelltöne aus den Logofarben ableiten und
 * alle im UI verwendeten Farbkombinationen nach WCAG 2.1 verifizieren.
 *
 * Aufruf:  node contrast-check.mjs
 *
 * "60 % blasser" ist definiert als Mischung Richtung WEISS (keine Entsättigung):
 *   neu = 0,4 * Original + 0,6 * Weiss   (pro RGB-Kanal)
 */

// ─── Farb-Helfer ──────────────────────────────────────────────────────────────
const hex2rgb = (h) => {
  const s = h.replace('#', '');
  return [0, 2, 4].map((i) => parseInt(s.slice(i, i + 2), 16));
};
const rgb2hex = (rgb) =>
  '#' + rgb.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('');

/** Mischung Richtung Weiss: amount = Weiss-Anteil (0..1) */
const mixWhite = (hexColor, amount) =>
  rgb2hex(hex2rgb(hexColor).map((c) => (1 - amount) * c + amount * 255));

/** Multiplikatives Abdunkeln (Farbton bleibt weitgehend erhalten) */
const darken = (hexColor, factor) =>
  rgb2hex(hex2rgb(hexColor).map((c) => c * factor));

/** Alpha-Komposit: `fg` mit Deckkraft `alpha` ueber deckendem `bg` */
const over = (fg, bg, alpha) => {
  const f = hex2rgb(fg);
  const b = hex2rgb(bg);
  return rgb2hex(f.map((c, i) => alpha * c + (1 - alpha) * b[i]));
};

/** WCAG 2.1 Relative Luminance */
const luminance = (hexColor) => {
  const [r, g, b] = hex2rgb(hexColor).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/** WCAG 2.1 Kontrastverhältnis */
const contrast = (a, b) => {
  const [l1, l2] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
};

/**
 * Dunkelste noetige Variante: dunkelt `base` schrittweise ab, bis der
 * Kontrast gegen ALLE `backgrounds` mindestens `target` erreicht.
 */
const darkenUntil = (base, backgrounds, target) => {
  for (let f = 1; f > 0; f -= 0.002) {
    const c = darken(base, f);
    if (backgrounds.every((bg) => contrast(c, bg) >= target)) return c;
  }
  return '#000000';
};

// ─── Ausgangsfarben ───────────────────────────────────────────────────────────
const LOGO_GREEN = '#7fb719'; // Aktion
const LOGO_BLUE = '#1f85c2'; // Auszeichnung

// Erdton-Leinwand (unveraendert)
const BG = '#faf8f5';
const BG_ALT = '#f3ede5';
const SURFACE = '#ffffff';
const SURFACE_2 = '#f0ebe3';
const TEXT = '#1c1916';
const TEXT_MUTED = '#6b6560';
const EARTH_BGS = [BG, BG_ALT, SURFACE, SURFACE_2];

// ─── Pastell-Skala ableiten ───────────────────────────────────────────────────
const PRIMARY = mixWhite(LOGO_GREEN, 0.6); // Flaeche
const PRIMARY_HOVER = darken(PRIMARY, 0.9); // Hover ~10 % dunkler
const PRIMARY_TINT = mixWhite(PRIMARY, 0.7); // sehr heller Tint (Chips)
const ACCENT = mixWhite(LOGO_BLUE, 0.6);
const ACCENT_HOVER = darken(ACCENT, 0.9);
const ACCENT_TINT = mixWhite(ACCENT, 0.7);

// Dunkle Varianten – NUR fuer Text/Icons, nie als Flaeche.
// "ink" = Text AUF der Pastellflaeche (inkl. Hover-Flaeche).
// "text" = Farbe als Text/Icon auf der Erdton-Leinwand.
const PRIMARY_INK = darkenUntil(LOGO_GREEN, [PRIMARY, PRIMARY_HOVER, PRIMARY_TINT], 4.5);
const ACCENT_INK = darkenUntil(LOGO_BLUE, [ACCENT, ACCENT_HOVER, ACCENT_TINT], 4.5);
const PRIMARY_TEXT = darkenUntil(LOGO_GREEN, EARTH_BGS, 4.5);
const ACCENT_TEXT = darkenUntil(LOGO_BLUE, EARTH_BGS, 4.5);

// ─── Ausgabe: Skala ───────────────────────────────────────────────────────────
const pad = (s, n) => String(s).padEnd(n);
console.log('\n═══ PASTELL-SKALA (60 % Richtung Weiss) ═══\n');
const scale = [
  ['--color-primary', LOGO_GREEN, PRIMARY, 'Pastellflaeche Gruen: Buttons, aktive Flaechen'],
  ['--color-primary-hover', LOGO_GREEN, PRIMARY_HOVER, 'Hover-Flaeche (10 % dunkler als Flaeche)'],
  ['--color-primary-tint', LOGO_GREEN, PRIMARY_TINT, 'Sehr heller Tint: Icon-Kacheln, Hintergrund-Chips'],
  ['--color-primary-ink', LOGO_GREEN, PRIMARY_INK, 'Text/Icon AUF Pastellgruen (nie als Flaeche)'],
  ['--color-primary-text', LOGO_GREEN, PRIMARY_TEXT, 'Gruen als Text/Icon auf Erdton (Links)'],
  ['--color-accent', LOGO_BLUE, ACCENT, 'Pastellflaeche Blau: Tags, Labels, Highlights'],
  ['--color-accent-hover', LOGO_BLUE, ACCENT_HOVER, 'Hover-Flaeche (10 % dunkler als Flaeche)'],
  ['--color-accent-tint', LOGO_BLUE, ACCENT_TINT, 'Sehr heller Tint: Tag-Hintergruende'],
  ['--color-accent-ink', LOGO_BLUE, ACCENT_INK, 'Text/Icon AUF Pastellblau (nie als Flaeche)'],
  ['--color-accent-text', LOGO_BLUE, ACCENT_TEXT, 'Blau als Text/Icon auf Erdton (Labels)'],
];
console.log(pad('Token', 24) + pad('Original', 10) + pad('Neu', 10) + 'Verwendung');
console.log('─'.repeat(110));
for (const [token, orig, val, use] of scale) {
  console.log(pad(token, 24) + pad(orig, 10) + pad(val, 10) + use);
}

// ─── Ausgabe: Kontrastpruefung ────────────────────────────────────────────────
/** [Vordergrund, Hintergrund, Ziel, Beschreibung] */
const CHECKS = [
  // Buttons / klickbare Pastellflaechen – dunkler Text, NIE Weiss
  [PRIMARY_INK, PRIMARY, 4.5, 'btn-primary: Text auf Pastellgruen'],
  [PRIMARY_INK, PRIMARY_HOVER, 4.5, 'btn-primary:hover: Text auf Hover-Gruen'],
  [TEXT, PRIMARY, 4.5, 'Erdton-Text auf Pastellgruen (Bilingual-Band, CTA-Band)'],
  // --color-text-muted (#6b6560) erreicht auf Pastellgruen nur 4,10:1 und wird
  // dort daher NICHT verwendet. Sekundaertext auf Pastell = --color-text @ 75 %.
  [over(TEXT, PRIMARY, 0.75), PRIMARY, 4.5, 'Sekundaertext (text @75 %) auf Pastellgruen'],
  // 60 % Deckkraft ergaebe nur 4,10:1 -> Mindest-Deckkraft auf Pastell ist 70 %.
  [over(TEXT, PRIMARY, 0.7), PRIMARY, 4.5, 'Tertiaertext (text @70 %, Minimum) auf Pastellgruen'],
  [over(TEXT, ACCENT, 0.7), ACCENT, 4.5, 'Tertiaertext (text @70 %, Minimum) auf Pastellblau'],
  [PRIMARY_INK, over(SURFACE, PRIMARY, 0.6), 4.5, 'Text in Glaskarte (Weiss @60 %) auf Pastellgruen'],
  [TEXT, over(SURFACE, PRIMARY, 0.6), 4.5, 'Erdton-Text in Glaskarte auf Pastellgruen'],
  [ACCENT_INK, ACCENT, 4.5, 'Tag/Badge: Text auf Pastellblau'],
  [ACCENT_INK, ACCENT_HOVER, 4.5, 'Tag/Badge Hover: Text auf Hover-Blau'],
  [TEXT, ACCENT, 4.5, 'Erdton-Text auf Pastellblau'],

  // Tints als Chip-/Kachel-Hintergrund
  [PRIMARY_INK, PRIMARY_TINT, 4.5, 'Icon/Text auf Gruen-Tint'],
  [PRIMARY_TEXT, PRIMARY_TINT, 4.5, 'Gruen-Text auf Gruen-Tint'],
  [TEXT, PRIMARY_TINT, 4.5, 'Erdton-Text auf Gruen-Tint'],
  [ACCENT_INK, ACCENT_TINT, 4.5, 'Tag-Text auf Blau-Tint'],
  [ACCENT_TEXT, ACCENT_TINT, 4.5, 'Blau-Text auf Blau-Tint'],
  [TEXT, ACCENT_TINT, 4.5, 'Erdton-Text auf Blau-Tint'],

  // Textlinks / kleine Icons auf der Erdton-Leinwand
  [PRIMARY_TEXT, BG, 4.5, 'Link gruen auf --color-bg'],
  [PRIMARY_TEXT, BG_ALT, 4.5, 'Link gruen auf --color-bg-alt'],
  [PRIMARY_TEXT, SURFACE, 4.5, 'Link gruen auf Weiss (Karten)'],
  [PRIMARY_TEXT, SURFACE_2, 4.5, 'Link gruen auf --color-surface-2'],
  [ACCENT_TEXT, BG, 4.5, 'Label blau auf --color-bg'],
  [ACCENT_TEXT, BG_ALT, 4.5, 'Label blau auf --color-bg-alt'],
  [ACCENT_TEXT, SURFACE, 4.5, 'Label blau auf Weiss (Karten)'],
  [ACCENT_TEXT, SURFACE_2, 4.5, 'Label blau auf --color-surface-2'],

  // Dunkle Flaechen (Footer / Bewerbungs-CTA) bleiben unveraendert weiss
  ['#ffffff', TEXT, 4.5, 'Weisser Text auf dunkler Flaeche (Footer)'],

  // UI-Grenzen / Fokusring: 3:1 genuegt (WCAG 1.4.11 Non-text Contrast)
  [PRIMARY_TEXT, BG, 3, 'Fokusring gruen auf --color-bg (UI, 3:1)'],
  [PRIMARY_TEXT, BG_ALT, 3, 'Fokusring gruen auf --color-bg-alt (UI, 3:1)'],
  [PRIMARY_TEXT, PRIMARY, 3, 'Fokusring gruen auf Pastellgruen (UI, 3:1)'],
  // Die Pastellflaeche allein liegt gegen die helle Erdton-Leinwand unter 3:1
  // (Gruen 1,32:1 / Blau 1,57:1). Jede interaktive Pastellflaeche traegt daher
  // einen 2px-Rand in der jeweiligen ink-Farbe; dieser Rand liefert die von
  // WCAG 1.4.11 geforderte Abgrenzung.
  [PRIMARY_INK, BG, 3, 'Button-Rand gruen gegen --color-bg (UI, 3:1)'],
  [PRIMARY_INK, BG_ALT, 3, 'Button-Rand gruen gegen --color-bg-alt (UI, 3:1)'],
  [PRIMARY_INK, SURFACE, 3, 'Button-Rand gruen gegen Kartenweiss (UI, 3:1)'],
  [ACCENT_INK, SURFACE, 3, 'Badge-Rand blau gegen Kartenweiss (UI, 3:1)'],
  [ACCENT_INK, BG_ALT, 3, 'Badge-Rand blau gegen --color-bg-alt (UI, 3:1)'],
];

console.log('\n═══ KONTRASTPRUEFUNG (WCAG 2.1 Relative Luminance) ═══\n');
console.log(pad('FG', 10) + pad('BG', 10) + pad('Ratio', 9) + pad('Ziel', 7) + pad('Status', 8) + 'Kombination');
console.log('─'.repeat(110));
let failed = 0;
for (const [fg, bg, target, label] of CHECKS) {
  const ratio = contrast(fg, bg);
  const ok = ratio >= target;
  if (!ok) failed++;
  console.log(
    pad(fg, 10) + pad(bg, 10) + pad(ratio.toFixed(2) + ':1', 9) +
    pad(target + ':1', 7) + pad(ok ? 'PASS' : 'FAIL', 8) + label
  );
}

console.log('\n' + '─'.repeat(110));
console.log(failed === 0
  ? `Alle ${CHECKS.length} Kombinationen bestehen.`
  : `${failed} von ${CHECKS.length} Kombinationen scheitern.`);

// Gegenprobe: Weiss auf Pastell ist bewusst NICHT erlaubt.
console.log('\n═══ GEGENPROBE: Weisser Text auf Pastell (bewusst verboten) ═══\n');
for (const [name, c] of [['Pastellgruen', PRIMARY], ['Pastellblau', ACCENT]]) {
  console.log(`  #ffffff auf ${pad(name, 14)} ${contrast('#ffffff', c).toFixed(2)}:1  -> unter 4,5:1, daher im UI nirgends verwendet`);
}
console.log();

process.exit(failed === 0 ? 0 : 1);
