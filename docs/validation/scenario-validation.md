# Szenario-Validierung

Stand: 20. August 2026

Diese Validierung prüft, ob der Orchestrierungs-Skill seine zentrale Aufgabe erfüllt: **nur notwendige Kompetenzen und Prüfungen aktivieren, ohne wichtige Risiken zu überspringen oder eine Skill-Suppe zu erzeugen.** Die Szenarien sind absichtlich unterschiedlich, damit sowohl ein kreatives Website-Projekt als auch eine risikoreichere App den Router beanspruchen.

## Szenario A — Marken-Website für ein technisches B2B-Angebot

### Ausgangslage

Ein Unternehmen benötigt eine neue Website mit mehreren Zielgruppen, komplexer Erklärung, Kontakt-/Beratungs-Conversion und vorhandenen, aber inkonsistenten Markenassets. Der Nutzer stellt Awwwards-Links, zwei Design-Referenzen, ein Animations-Skill-Repository und ein WebGL-Beispiel bereit. Es gibt weder Nutzerarchitektur noch eine etablierte Designsystem-Dokumentation.

### Erwartetes Routing

| Schritt | Aktivierung | Begründung | Nicht aktivieren |
| --- | --- | --- | --- |
| Projektaufnahme | Brief und Bestandsanalyse | Zielgruppen, bestehende Inhalte, Assets, Formulare und SEO müssen erhalten bzw. bewusst verändert werden. | Seitenimplementierung. |
| Quellenanalyse | Source Audit mit A–E-Klassifikation | Referenzen und Repositories besitzen unterschiedliche Rollen und Risiken. | Installation oder Kopie fremden Codes. |
| Produkt/UX | Journey, Informationsarchitektur und Seiten-Blueprints | Die Website muss Probleme und nächste Schritte vor Produkte stellen. | Designsystem oder Component Library vor der IA. |
| Creative Direction | Drei unterschiedliche Richtungen und `DESIGN.md` | Die Marke benötigt eine eigene digitale Sprache. | Eine einzelne Referenz nachbauen. |
| Motion | Zweck- und Reduced-Motion-Review nach statischem Layout | Das Animations-Skill ist nur für eine begründete Interaktion sinnvoll. | Bewegung jeder Section. |
| Spezialtechnik | Nutzen-/Kosten-Assessement für WebGL | WebGL kann eine Speziallösung sein, ist aber kein Website-Default. | Aufnahme in die Kernarchitektur ohne Fallback. |
| QA | Screenshots, a11y, Responsive, Performance, SEO | Für einen öffentlichen Webauftritt relevant. | Security Review außerhalb von Formular-/Datenschutzrisiken. |

### Erwartete Entscheidungen

- **A:** Produktbrief, UX-/Content-Architektur, eigene `DESIGN.md`, Visual QA.
- **B:** Motion-Review für klar definierte Interaktionen; Diagramm/Flow-Mittel für komplexe Journeys.
- **C:** Award- und Komponentenreferenzen als Analyse-Material.
- **D/E:** WebGL ohne konkreten Erklärwert, Copy/Paste-Template-Mechaniken und reine Runtime-Videoeditoren.

### Ergebnis

Der Skill verhindert, dass Referenzen unmittelbar zu UI, Libraries oder Effekten werden. Er ermöglicht trotzdem eine hochwertige Creative Direction, weil Design- und Motion-Fachkompetenz erst **nach** Nutzer-, Content- und Markenlogik aktiviert werden.

## Szenario B — Kundenportal mit Konto, sensiblen Daten und Zahlungsvorgang

### Ausgangslage

Eine bestehende responsive App soll um Rechnungen, Zahlungsstatus und eine Aktualisierung von Kontodaten erweitert werden. Die Oberfläche ist funktional, aber inkonsistent. Der Nutzer nennt eine attraktive UI-Library, ein Toast-Repository und ein 3D-Dashboard-Beispiel.

### Erwartetes Routing

| Schritt | Aktivierung | Begründung | Nicht aktivieren |
| --- | --- | --- | --- |
| Projektaufnahme | Bestands-, Datenfluss- und Berechtigungsanalyse | Bestehende Authentifizierung, Servergrenzen und Zahlungslogik dürfen nicht still verändert werden. | Visuelle Überarbeitung ohne Fehlerfallanalyse. |
| Architektur | Zustands-, Fehlerfall-, Datenintegritäts- und Sicherheitsprüfung | Zahlung und Kontodaten erhöhen Risiko und Reversibilitätsanforderungen. | Nur einen Frontend-Design-Skill. |
| UI-System | Component-/Accessibility-Review | Konsistenz, Fokus, Formulare und Fehlermeldungen sind produktkritisch. | Kompletter Library-Wechsel ohne Dependency Record. |
| Library-Entscheidung | Bestehender Stack, Lizenz, Wartung, Bundle und a11y prüfen | Ein Toast kann sinnvoll sein; eine neue UI-Suite nur bei echter Lücke. | Installation aufgrund guter Demo. |
| Visual Design | Bestehende Marke und klare Informationshierarchie schärfen | Zahlungs- und Kontoansichten brauchen Vertrauen und Klarheit. | 3D-Dashboard-Dekoration. |
| QA | Testfälle für Berechtigung, Validierung, Fehlermeldungen, Datenstände, Tastatur, Responsive und Performance | Der Kernnutzen ist eine sichere, verständliche Aufgabe. | Abschluss bei einem grünen Build. |

### Erwartete Entscheidungen

- **A:** Datenfluss-/Fehlerfallmodell, Accessibility und risikogerechte technische QA.
- **B:** Gezielte UI-Primitives oder Notifications, wenn vorhandene Mittel eine konkrete a11y-/UX-Lücke nicht lösen.
- **C:** Visuelle Referenzen für Dichte, Typografie und Statusklarheit.
- **E:** 3D-Dashboard, sofern es Statusverständnis nicht eindeutig verbessert; clientseitige Sicherheitsabkürzungen.

### Ergebnis

Der Skill verschiebt den Schwerpunkt bei einer App korrekt: Designqualität bleibt wichtig, wird aber nicht gegen Datenintegrität, Berechtigungen, Fehlerbehandlung und Sicherheit ausgespielt. Das Routing aktiviert nicht gleichzeitig jede technische Spezialkompetenz, sondern nur die Risiken, die der Flow auslöst.

## Prüfergebnis

| Prüfkriterium | Website | App | Ergebnis |
| --- | --- | --- | --- |
| Projektbrief vor der Umsetzung | erfüllt | erfüllt | Der Router verlangt Kontext statt Sofort-Build. |
| Quellen nicht blind übernehmen | erfüllt | erfüllt | Source-Audit-Klassen und Stop-Conditions greifen. |
| Reihenfolge nach Abhängigkeiten | erfüllt | erfüllt | UX/Architektur gehen jeweils der Skalierung voraus. |
| Selektive Skill-Nutzung | erfüllt | erfüllt | Motion und WebGL bleiben konditional; Security nur bei App-Risiko zwingend. |
| Design ohne Slop-Defaults | erfüllt | erfüllt | Anti-Slop- und Reduction-Gate greifen in beiden Szenarien. |
| Risikogerechte QA | erfüllt | erfüllt | Öffentliche Website und Zahlungsflow erhalten unterschiedliche Tiefen. |

## Fazit und daraus abgeleitete Schärfung

Der Test bestätigt die Kernlogik. Die Website-Prüfung stellt sicher, dass Research und Creative Direction nicht zu einem Template führen. Die App-Prüfung verhindert, dass Ästhetik und Framework-Auswahl den kritischen Daten- und Sicherheitsfluss überholen.

Eine Ergänzung bleibt verbindlich: Der Router muss bei Authentifizierung, Zahlung, Kontodaten, rechtlicher Relevanz oder irreversiblen Migrationen vor jeder tiefen Implementierung einen expliziten Stop zur Risiko- und Entscheidungsprüfung setzen. Diese Bedingung ist bereits in `references/routing.md` und im Kern-Skill dokumentiert.
