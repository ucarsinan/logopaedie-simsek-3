# PROJECT_REALITY

Last audit: 2026-08-30
Recommendation: continue
Confidence: high

## Core Problem
- Problem: Menschen und potenzielle Mitarbeitende in Duisburg brauchen eine vertrauenswuerdige, auffindbare und zweisprachige DE/TR-Praxiswebsite mit klaren Kontakt- und Karrierewegen.
- Affected user: Patient:innen, Eltern, Angehoerige, Zuweiser:innen sowie staatlich anerkannte und zugelassene Logopaed:innen und Sprachtherapeut:innen.
- Painful current workflow: Nutzer:innen muessen Leistungen, Standort, Rezept-/Kostenbasis, Sprache, Terminweg und Arbeitsbedingungen schnell verstehen, ohne auf widerspruechliche Legacy-Seiten oder unbelegte Aussagen zu treffen.
- Desired real-world outcome: Passende Patient:innen finden den telefonischen Terminweg; passende Fachkraefte erhalten glaubwuerdige Erwartungen und koennen unverbindlich Kontakt aufnehmen.
- Success criteria: DE/TR-Seiten, Arbeitgeberaussagen, strukturierte Daten, Redirects und Kontaktwege sind konsistent; qualifizierte Kontakte und reale Nutzung werden datenschutzkonform beobachtet.

## Current State
- Implemented: Astro 6 Static Site mit Tailwind CSS v4, Vercel Adapter, DE/TR-Seiten, Therapie-, Team-, Karriere-, Kontakt- und Legal-Seiten, JSON-LD, Sitemap und Legacy-Redirects.
- Released: Die Employer-Truth-Harmonisierung wurde mit Commit `8582e32` auf `main` gepusht und am 30.08.2026 auf `https://logopaedie-simsek.de/karriere/` sowie `/kariyer/` live verifiziert.
- Released: Vollzeit 38,5 Stunden, variable Teilzeit, Vier-Tage-Woche, Verguetung, Weihnachtsgeld, Urlaub, Einarbeitung, Qualifikation, Ausstattung und Bewerbung entsprechen der freigegebenen Arbeitgeberwahrheit.
- Verified locally: Der letzte vollstaendige Check meldete 0 Fehler, 0 Warnungen, einen bestehenden Inline-Script-Hinweis und einen erfolgreichen Build mit 34 Seiten; Desktop- und Mobile-QA der Karriereseiten sind erfolgt.
- Measurement: Vercel Web Analytics wird live geladen. Google Analytics wird in dieser Codebasis nicht geladen.
- Not approved: Weitere Arbeitgeberversprechen, Brand-/Token-Umbau, Tracking-Ausbau, Social/Ads, Vercel-/DNS-/Indexierungsaktionen und sonstige Website-Aenderungen ausserhalb eines begrenzten Auftrags.

## Reality Findings
- Local evidence: `main` ist auf `32eb8e9` sauber mit `origin/main` synchron; die Karriereimplementierung, DE/TR-Paritaet und der Bewerbungsfluss sind versioniert.
- Live evidence: Die deutschen und tuerkischen Karriereseiten zeigen die neuen Arbeitsbedingungen und das kurze Formular; Telefon, E-Mail und Post bleiben als alternative Bewerbungswege sichtbar.
- Branch evidence: Die drei vollstaendig gemergten lokalen Alt-Branches und der temporaere detached Worktree wurden am 30.08.2026 entfernt. Der abweichende Zwischenstand liegt in `stash@{0}` mit der Kennzeichnung `archive: superseded pre-release worktree 2026-08-30`; der gemergte Remote-Claude-Branch blieb unangetastet.
- Best-practice implication: Keine weitere visuelle oder SEO-Ausweitung, bevor zentrale Brand-, Asset-, Mess- und Datenschutzentscheidungen getroffen sind.
- Key uncertainty: Conversion-/Kontaktleistung, Foto- und Logorechte, Mess-Owner sowie Search-Console-/Rich-Results-Stand.

## Gaps And Risks
- Missing essentials: Logo-Master, Foto-/Rechteregister, formale Brandfreigabe, Hiring-/Retention-Baseline, Messplan und aktuelle externe SEO-/Accessibility-Evidenz.
- Drift warnings: Mehr Landingpages, Designsystem-Migration, Social-/Ads-Produktion oder LLM-Optimierung ohne Nachweis, dass sie den Fachkraefteengpass loesen.
- Risks: Build und visuelle QA belegen keine qualifizierten Kontakte, Einstellungen oder langfristige Bindung; Vercel Analytics ist im zentralen Datenschutz-/Messrahmen noch nicht vollstaendig dokumentiert.
- Technical debt: Der gemergte Remote-Claude-Branch und der lokale Archiv-Stash bleiben als klar bezeichnete, nicht aktive Wiederherstellungsreferenzen bestehen.

## Next Logical Step
1. Step: Logo-Master, Fotos, Einwilligungen, Nutzungsrechte und Asset-Owner in der zentralen Strategie fuer `GATE-003` klaeren.
   Why: Der enge Employer-Truth-Release ist live; weitere Produktarbeit braucht belastbare Assets und Messung statt zusaetzlicher Oberflaeche.
   Validation: Dokumentierte Assetrechte, freigegebene verwendbare Varianten und benannte Asset-Owner.
   Stop/continue rule: Keine neue Website-, Tracking-, Social- oder Kampagnenarbeit vor dem jeweiligen zentralen Gate.

## Do Not Build Yet
- weitere Recruiting- oder Therapieclaims ohne Primärquelle
- vollstaendige Designsystem-/Tokenmigration
- zusaetzliche Landingpages oder Content-Cluster ohne Messziel
- GA4 oder neue Tracking-Events
- Social-/Ads-Automation
- Resend-/Patientenkontaktformular fuer Terminvereinbarungen

## Source Links
- Zentrale Arbeitgeberwahrheit: `../Logopädie/docs/strategy/EMPLOYER_TRUTH.md`
- Produktionsseite: https://logopaedie-simsek.de/
- Karriereseite: https://logopaedie-simsek.de/karriere/
