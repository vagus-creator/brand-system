# Workflow und Qualitäts-Gates

Nutze diese Referenz für mehrstufige Websites und Apps, Redesigns, kritische Flows oder Vorhaben mit mehreren externen Quellen. Passe die Tiefe der Risiken an; überspringe keine offene Abhängigkeit.

## Phasen und Exit-Kriterien

| Phase | Kernfrage | Erzeuge bei Bedarf | Weitergehen erst, wenn … |
| --- | --- | --- | --- |
| 0. Bestand | Was existiert und was darf nicht brechen? | Bestandsnotiz, Risikoliste | Routen, Daten, Businesslogik und offene Risiken erfasst sind. |
| 1. Research | Was ist belegt und welche Quelle erfüllt welchen Zweck? | `SOURCE_AUDIT.md` | Quellen klassifiziert und nicht relevante Ressourcen verworfen sind. |
| 2. Produkt/UX | Was soll ein Nutzer verstehen, fühlen und tun? | `UX_ARCHITECTURE.md` | Primärer Nutzerweg, Hierarchie und nächste Schritte klar sind. |
| 3. Creative Direction | Welche eigene visuelle Sprache dient dem Produkt? | Creative-Direction-Notiz | Alternativen anhand der Ziele beurteilt und eine Richtung begründet ist. |
| 4. System | Welche Regeln müssen konsistent bleiben? | `DESIGN.md`, Motion-/Content-Regeln | Tokens, Zustände, Responsive- und Interaktionsprinzipien reichen aus. |
| 5. Architektur | Wie trägt Technik die Produktanforderung? | `TECHNICAL_ARCHITECTURE.md`, `DECISIONS.md` | Daten, Grenzen, Abhängigkeiten, Fehlerfälle und Delivery-Plan geklärt sind. |
| 6. Vertical Slice | Funktioniert ein zentraler Flow vollständig? | Implementierung, Tests, Screenshots | Kernflow inklusive Mobil, Fehlerfällen und Basis-QA überzeugt. |
| 7. Skalierung | Welche bewährten Muster tragen weitere Flows? | Komponenten-/Seiten-Erweiterungen | Verallgemeinerung aus Beweisen statt Spekulation entsteht. |
| 8. QA | Besteht das Ergebnis visuell und technisch? | `QA_REPORT.md` | Kritische Befunde behoben oder explizit akzeptiert sind. |
| 9. Reduction | Was kann ohne Wirkungsverlust weg? | Reduktionsliste, aktualisierte Decisions | Keine Komplexität ohne klaren Nutzerwert verbleibt. |

## Risiko-Triage

| Risikostufe | Beispiele | Mindesttiefe |
| --- | --- | --- |
| Niedrig | Statische Marketingseite ohne Datenfluss | Brief, Informationshierarchie, visuelle/mobile/a11y QA. |
| Mittel | Mehrere Flows, Forms, CMS, Produktkonfiguration | Zusätzlich Architektur, Zustände, Fehlerfälle, Performance und SEO. |
| Hoch | Authentifizierung, Zahlung, sensible Daten, regulatorische Folge, komplexe App-Logik | Zusätzlich Sicherheit, Datenintegrität, Berechtigungen, Monitoring und Rollback-Plan. |

## Vertical-Slice-Regel

Baue niemals zuerst alle Seiten oder alle Komponenten. Wähle den wichtigsten realen Nutzerweg und liefere in einer durchgehenden Scheibe:

1. Orientierung oder Einstieg,
2. Kerninformation oder Kernaufgabe,
3. Entscheidung bzw. Interaktion,
4. Erfolg, Fehler oder Leerzustand,
5. nächster sinnvoller Schritt,
6. Mobile-Fassung,
7. relevante Accessibility- und Performance-Prüfung.

Verallgemeinere erst nach erfolgreicher Prüfung. Eine Komponente entsteht aus echter Wiederholung, nicht aus dem Wunsch nach einem möglichst großen Component-Katalog.

## Visual- und UX-Review

Prüfe Screenshots und reale Bedienung an relevanten Viewports. Formuliere Befunde als beobachtbare Ursache-Wirkung-Aussagen.

| Dimension | Prüffrage |
| --- | --- |
| Hierarchie | Ist Zweck, Kerninformation und nächster Schritt unmittelbar klar? |
| Komposition | Unterstützen Proportion, Raster und Weißraum die Aufgabe? |
| Typografie | Sind Rollen, Länge, Zeilenmaß und Kontrast bewusst und lesbar? |
| Rhythmus | Wechseln Informationsdichte und visuelle Pausen sinnvoll? |
| Eigenständigkeit | Entsteht eine projektspezifische Signatur statt eines Templates? |
| Inhalt | Sind Claims, Zahlen, Testimonials und Beweise belegt? |
| Interaktion | Ist jedes Verhalten erwartbar, rückmeldend und mit Tastatur erreichbar? |
| Mobile | Ist die mobile Komposition eigenständig und berührungstauglich? |

## Engineering-Review

Prüfe nur das, was für das Vorhaben relevant ist; dokumentiere die Nicht-Relevanz. Prüfe mindestens Build, reale Fehlerfälle, Semantik, Fokus, Kontrast, Responsive und wesentliche Leistungsrisiken.

| Bereich | Prüfe |
| --- | --- |
| Runtime | Fehler, leere Daten, Ladezustände, Wiederholung und Unterbrechung. |
| Accessibility | Tastatur, Fokus, semantische Struktur, Labels, Fehlermeldungen, Kontrast, Touch Targets, reduzierte Bewegung. |
| Performance | Bild-/Font-Strategie, JavaScript, Hydration, Drittanbieter, LCP-/CLS-/Interaktionsrisiko. |
| SEO | Metadaten, Überschriften, Kanonisierung, robots/sitemap, crawlbarer Inhalt und strukturierte Daten nur bei echter Passung. |
| App-Risiko | Zustand, Berechtigungen, Datenvalidierung, Transaktionen, Sicherheit, Logging und Recovery. |

## Council-Protokoll

Verwende das Council nur bei Entscheidungen mit echtem Zielkonflikt oder hoher Folgewirkung. Vermische keine Rollen mit Implementierung.

1. Formuliere eine konkrete Entscheidungsfrage, akzeptierte Constraints und die verfügbaren Optionen.
2. Bitte mindestens drei unabhängige Perspektiven um ein kurzes Urteil: UX/Produkt, Design/Marke und Engineering.
3. Ergänze Conversion, Accessibility, Performance oder Sicherheit nur bei Relevanz.
4. Lass jede Perspektive Nutzen, Risiko, Verletzung von Projektregeln und Bedingungen benennen.
5. Synthetisiere als Integrator nach Projektziel und Evidenz; entscheide nicht durch Stimmenzählung.
6. Halte Entscheidung, offene Risiken und Kriterien für eine spätere Neubewertung fest.

```md
## Council Decision: [Frage]

### Kontext und Constraints

### Option A / B / C

| Rolle | Befund | Risiko | Bedingung für Zustimmung |
| --- | --- | --- | --- |
| UX/Product | | | |
| Design/Brand | | | |
| Engineering | | | |

### Synthese
- **Entscheidung:**
- **Warum:**
- **Akzeptierte Risiken:**
- **Neubewerten, wenn:**
```

## Removal Pass

Führe vor jedem Milestone-Abschluss eine Entfernungssuche durch. Streiche oder vereinfache, wenn kein klarer Nutzerwert besteht:

- Abhängigkeiten und Build-Tooling;
- Komponenten, Varianten und Zustände;
- Animation, Dekoration und WebGL/Video;
- Assets, Schriften und Drittanbieter;
- Copy, Zahlen und soziale Beweise;
- Dokumentation ohne Entscheidung oder wiederkehrende Nutzung.

Vereinfache niemals Accessibility, Sicherheit, Datenintegrität, Verständlichkeit oder Wartbarkeit weg.
