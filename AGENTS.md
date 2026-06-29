# logopaedie-simsek-3 – AGENTS.md

## Was ist das?
Finale Website für Praxis für Logopädie Şimşek (logopaedie-simsek.de).
Ersetzt alle POC-Varianten (logopaedie-simsek, logopaedie-copy).

## Stack
- **Astro 6** · Static Output (`output: 'static'`) · Vercel Adapter
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **Kontaktfluss** — Termine ausschließlich telefonisch; E-Mail nur für allgemeine Fragen
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
- Türkische Hauptseiten: `anasayfa.astro`, `iletisim.astro`, `ekip.astro`, `kariyer.astro`; `src/pages/tr/` nur für einzelne Info-/Legacy-Seiten wie Kostenübernahme
- `src/pages/therapie/` — DE-Übersichts- und Leistungsdetailseiten
- `src/pages/therapieangebot/` — Legacy-Redirect auf `/therapie/`
- `src/pages/terapi/` — Türkische Leistungsseiten
- `src/pages/kontakt.astro` / `iletisim.astro` — Kontakt DE/TR mit Telefon-CTA und optional geladener Google Map
- `src/pages/karriere.astro` — Jobs
- Redirects in `astro.config.ts` und `vercel.json` für alte WordPress-URLs + alte `/leistungen/`-Struktur

## i18n
Übersetzungskeys in `src/i18n/de.ts` und `src/i18n/tr.ts`.
Neue Keys immer in **beiden** Dateien ergänzen.

## Naming / Terminologie
- **Eigenname:** Die Praxis heißt immer exakt `Praxis für Logopädie Şimşek`. Dieser Name wird weder im Deutschen noch im Türkischen übersetzt, abgekürzt oder durch anderssprachige Praxisnamen ersetzt.
- **Türkischer Fachbegriff:** Für die therapeutische Fachbezeichnung im Türkischen ausschließlich in der Türkei übliche Begriffe verwenden, insbesondere `dil ve konuşma terapisi` und `dil ve konuşma terapisti`.

## Deploy
- **Domain:** logopaedie-simsek.de
- **Adapter:** Vercel (`@astrojs/vercel`)
- Config-Datei: `vercel.json`

## Aktions-Tracking
Nach jeder Dateiänderung diese Zeile in ~/Development/personal-assistant/orchestration/current-state.md anhängen:
`[HH:MM] <projektname> | <EDIT|BASH> <datei-oder-befehl>`
Max. 15 Zeilen behalten (älteste löschen). So kann die nächste KI nahtlos übernehmen.

## Agentic-Arbeitsregel

Auch wenn der Nutzer eine Aufgabe kurz oder ungenau formuliert, arbeitest du immer nach diesem Prozess:

1. Kontext lesen.
2. Ziel und Nicht-Ziele ableiten.
3. Medizinische, rechtliche, SEO-, i18n-, Kontakt- und Datenschutzrisiken pruefen.
4. Betroffene Seiten, Komponenten, Uebersetzungen, Redirects und Checks identifizieren.
5. Einen kleinen nachvollziehbaren Plan erstellen.
6. Nur notwendige Aenderungen umsetzen.
7. Pflicht-Checks ausfuehren.
8. Ergebnis als handfesten Fahrplan berichten.

## Zusaetzliche Pflichtdokumente

Bei groesseren Aufgaben auch lesen:

- `PROJECT_CONTEXT.md`
- `WORKFLOW.md`
- `TESTING.md`
- `SECURITY.md`
- `docs/agents/worker-map.md`
- `docs/agents/git-workflow.md`

## Projektgrenzen

- Praxisname immer exakt `Praxis für Logopädie Şimşek`.
- Termine werden ausschliesslich telefonisch gefuehrt; E-Mail nur fuer allgemeine Fragen.
- Medizinische Aussagen muessen allgemein, seriös und nicht heilversprechend sein.
- DE/TR-i18n immer konsistent halten.
- SEO-Aenderungen muessen Redirects, Sitemap, Robots und Cannibalization beruecksichtigen.
- Keine Vercel-/DNS-/Domain-Aktion ohne ausdrueckliche Freigabe.

## Pflicht-Checks

Der bevorzugte Abschlussbefehl ist:

```bash
./scripts/verify.sh
```

Wenn der volle Check nicht laufen kann, dokumentiere warum und fuehre eine kleinere passende Ersatzpruefung aus.

## Git-Regeln

- Keine Commits ohne ausdrueckliche Freigabe.
- Kein Push ohne ausdrueckliche Freigabe.
- Vor Commit oder Push immer `git status` und relevante `git diff`-Ansichten pruefen.
- Nur Dateien stagen, die eindeutig zur freigegebenen Aufgabe gehoeren.
- Fremde, alte oder unklare Worktree-Aenderungen nicht stagen und nicht bereinigen.
- Keine destruktiven Git-Befehle ohne ausdrueckliche Freigabe.
- Vor Commit muss `./scripts/verify.sh` erfolgreich laufen oder das verbleibende Risiko transparent berichtet werden.

## Verstaendliche Abschlussberichte

Jeder Abschlussbericht muss enthalten:

- Kurzfazit: erledigt, teilweise erledigt oder blockiert.
- Was bedeutet das? Eine einfache Erklaerung in 1-3 Saetzen.
- Handfester Fahrplan: konkrete naechste Schritte in Reihenfolge.
- Pro Schritt: Datei/Bereich, Aktion, kurze Begruendung und ob Freigabe noetig ist.
- Empfohlene Entscheidung fuer den Nutzer.
- Git-Status: gestaged, committed, gepusht, naechste Freigabe.

Wenn nicht gepusht wurde, klar sagen: `Es wurde nichts gepusht.`

Findings muessen enthalten: Status (`SUPPORTED`, `PARTIALLY_SUPPORTED`, `INSUFFICIENT_EVIDENCE`, `CONFLICTING`, `NOT_FOUND`), Prioritaet (`P1`, `P2`, `P3`), Problem, Auswirkung, naechster Schritt und Begruendung.
