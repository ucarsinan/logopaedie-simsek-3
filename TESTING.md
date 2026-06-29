# TESTING.md

## Zentraler Check

```bash
./scripts/verify.sh
```

## Standardchecks

`./scripts/verify.sh` fuehrt lokal sichere Checks aus:

- optional `npm run check`, falls ein Check-Skript existiert
- optional `npx astro check`, falls `@astrojs/check` installiert ist
- `npm run build`
- `git diff --check`
- Whitespace-/EOF-Check fuer relevante untracked Dateien

## Freigabepflichtige Checks

Nur mit ausdruecklicher Freigabe:

- Vercel Deploy/Promote
- Live-Domain-/DNS-Aenderungen
- produktive Analytics-/Search-Console-Aktionen

## Kritische Testmatrix

| Bereich | Erwartete Pruefung |
| --- | --- |
| i18n | neue Keys in DE und TR |
| Kontakt | Telefon-CTA, E-Mail nur allgemein |
| SEO | Sitemap, Redirects, Canonicals, `llms.txt` |
| Medizinische Inhalte | keine Heilversprechen, klare Zielgruppen |
| UI | Mobile Navigation, Lesbarkeit, CTA-Fokus |
| Legal | Datenschutz, Impressum, Barrierefreiheit unverletzt |
