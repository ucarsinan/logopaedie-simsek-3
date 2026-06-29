# WORKFLOW.md

## Ziel

Dieses Repository soll auch bei kurzen Aufgaben kontrolliert bearbeitet werden. Agenten muessen Kontext, medizinische Sprache, i18n, SEO, Kontaktlogik, Checks und Git-Status klaeren.

## Standardablauf

1. `AGENTS.md` und Pflichtdokumente lesen.
2. `git status --short` pruefen.
3. Ziel, Nicht-Ziele, betroffene Dateien und Risiken ableiten.
4. Rolle waehlen: Planner, Implementer oder Reviewer.
5. Worker-Bereich aus `docs/agents/worker-map.md` bestimmen.
6. Aenderungen eng begrenzen.
7. `./scripts/verify.sh` ausfuehren.
8. Ergebnis als handfesten Fahrplan berichten.
9. Git-Abschluss nur nach `docs/agents/git-workflow.md`; Commit und Push brauchen Freigabe.

## Fahrplanpflicht

Berichte muessen entscheidungsfaehig sein:

- Kurzfazit
- Was bedeutet das?
- Handfester Fahrplan
- Pro Schritt: Datei/Bereich, Aktion, Begruendung, Freigabe ja/nein
- Empfohlene Entscheidung
- Git-Status

## Freigabepflichtige Aktionen

- Vercel Deployments, Domains, DNS oder Env Vars aendern
- medizinische Leistungsversprechen verschärfen
- Kontakt-/Terminfluss grundlegend aendern
- Legal-/Datenschutztexte substantiell aendern
- Live-SEO-/Indexierungsaktionen ausloesen
- Commits oder Pushes

## Rollenprompts

Wiederverwendbare Prompts liegen in `prompts/`. Groessere Arbeiten sollen einen Report nach `docs/agent-reports/report-template.md` erzeugen.
