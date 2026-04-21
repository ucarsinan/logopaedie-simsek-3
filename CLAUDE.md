# logopaedie-simsek-3 – CLAUDE.md

## Was ist das?
Finale Website für Logopädie-Praxis Şimşek (logopaedie-simsek.de).
Ersetzt alle POC-Varianten (logopaedie-simsek, logopaedie-copy).

## Stack
- **Astro 6** · Static Output (`output: 'static'`) · Vercel Adapter
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Resend** — Kontaktformular-E-Mail
- **i18n** — Deutsch + Türkisch (`src/i18n/de.ts`, `tr.ts`, `index.ts`)
- **Sitemap** — `@astrojs/sitemap` (impressum/datenschutz/barrierefreiheit gefiltert)

## Commands
```bash
npm run dev       # Dev-Server
npm run build     # Static Build
npm run preview   # Build-Preview
```

## Routing / Seitenstruktur
- `src/pages/index.astro` — Startseite (DE)
- `src/pages/tr/` — Türkische Seiten
- `src/pages/therapieangebot/` — Leistungsseiten
- `src/pages/terapi/` — Türkische Leistungsseiten
- `src/pages/kontakt.astro` / `iletisim.astro` — Kontakt DE/TR
- `src/pages/karriere.astro` — Jobs
- Redirects in `astro.config.ts` für alte WordPress-URLs + alte `/leistungen/`-Struktur

## i18n
Übersetzungskeys in `src/i18n/de.ts` und `src/i18n/tr.ts`.
Neue Keys immer in **beiden** Dateien ergänzen.

## Deploy
- **Domain:** logopaedie-simsek.de
- **Adapter:** Vercel (`@astrojs/vercel`)
- Config-Datei: `vercel.json`
