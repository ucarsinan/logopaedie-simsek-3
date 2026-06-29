# SECURITY.md

## Sicherheit und Compliance

Dieses Projekt ist eine Praxis-Website. Risiken liegen vor allem in Datenschutz, medizinischer Aussagekraft, Kontaktlogik, SEO-Sichtbarkeit und Deploy-Konfiguration.

## Regeln

- Keine Patientendaten oder echten Kontaktanfragen in Tests, Logs, Reports oder Prompts verwenden.
- Medizinische Texte muessen informativ bleiben und duerfen keine Heilversprechen enthalten.
- Kontaktlogik respektieren: Termine telefonisch, E-Mail nur allgemeine Fragen.
- Keine Secrets, Tokens, Vercel- oder DNS-Daten ausgeben.
- Legal-Seiten nicht ohne klare Begruendung veraendern.
- DE/TR-Texte nicht auseinanderlaufen lassen.

## Sicherheitspruefung vor Abschluss

1. Sind Patientendaten oder echte Kontaktinformationen betroffen?
2. Entsteht ein medizinisches oder rechtliches Risiko?
3. Wurde Termin-/Kontaktlogik veraendert?
4. Wurde SEO-Indexierung, Sitemap oder Redirect-Logik veraendert?
5. Wurde DE/TR-Konsistenz geprueft?
