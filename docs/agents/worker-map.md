# Worker Map — logopaedie-simsek-3

Diese Datei ist die dauerhafte Zuordnung fuer Agentenarbeit.

## Worker A — Public Pages und SEO

Zustaendig fuer:

- Startseite
- Therapie-/Leistungsseiten
- SEO-Seiten
- Sitemap, Redirects, Robots, `llms.txt`
- interne Verlinkung

Typische Dateien:

- `src/pages/`
- `astro.config.ts`
- `public/robots.txt`
- `public/llms.txt`

## Worker B — i18n und medizinische Inhalte

Zustaendig fuer:

- deutsche und tuerkische Texte
- Therapie-Terminologie
- Praxisname
- medizinische Aussagekraft
- DE/TR-Konsistenz

Typische Dateien:

- `src/i18n/de.ts`
- `src/i18n/tr.ts`
- Therapie- und Info-Seiten

## Worker C — Kontakt, Karriere und Conversion

Zustaendig fuer:

- Kontaktseiten
- Telefon-CTA
- Karriere-/Jobseiten
- Praxis-/Team-Kommunikation
- Karten-/Anfahrtslogik

Typische Dateien:

- `src/pages/kontakt.astro`
- `src/pages/iletisim.astro`
- `src/pages/karriere.astro`
- `src/pages/kariyer.astro`
- Team-Seiten

## Worker D — Designsystem und UI

Zustaendig fuer:

- Layout
- Navigation
- Komponenten
- responsive Darstellung
- Accessibility

Typische Dateien:

- `src/layouts/`
- `src/components/`
- globale Styles

## Worker E — CI, Tooling und Deploy

Zustaendig fuer:

- Build-/Verify-Skripte
- Vercel-Konfiguration
- Package-/Node-Konfiguration
- Projekt-Dokumentation

Typische Dateien:

- `scripts/`
- `package.json`
- `vercel.json`
- `.github/workflows/` (falls CI eingefuehrt wird)
- Dokumentation
