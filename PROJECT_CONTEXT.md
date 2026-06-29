# PROJECT_CONTEXT.md

## Projekt

Name: logopaedie-simsek-3

## Zweck

Finale Website fuer `Praxis für Logopädie Şimşek` auf `logopaedie-simsek.de`.
Die Website ersetzt fruehere POC-Varianten und dient als seriöse Praxis-, Therapie-, Kontakt-, Team- und Karrierepraesenz auf Deutsch und Tuerkisch.

## Stack

- Astro 6
- Static Output mit Vercel Adapter
- Tailwind CSS v4
- Sitemap
- i18n Deutsch/Tuerkisch

## Wichtige Systembereiche

| Bereich | Verantwortung |
| --- | --- |
| `src/pages/` | Seiten, Therapiebereiche, Kontakt, Karriere, Legal |
| `src/i18n/` | DE/TR-Uebersetzungen und Terminologie |
| `src/layouts/` | Layout, Meta, globale Struktur |
| `src/components/` | UI-Sektionen, Navigation, Karten, CTAs |
| `astro.config.ts` | Redirects, Sitemap, Vercel, Tailwind |
| `vercel.json` | Deploy- und Redirect-Konfiguration |
| `public/` | statische Assets, Logos, `llms.txt`, Icons |

## Kritische Grenzen

- Keine Heilversprechen oder ueberzogene medizinische Aussagen.
- Keine falsche Terminlogik: Termine nur telefonisch.
- Praxisname und tuerkische Fachbegriffe muessen exakt bleiben.
- i18n-Aenderungen immer in DE und TR pruefen.
- SEO-Seiten duerfen sich nicht gegenseitig kannibalisieren.
- Legal-Seiten und Datenschutz nicht beiläufig veraendern.

## Aktueller Installationsstand

Der Agentic-Workflow ist Prozess- und Governance-Struktur. Er fuehrt keine Produkt-Agentenfunktion, Runtime-Automatisierung oder externe Tool-Calling-Logik ein.
