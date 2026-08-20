# Architektur: Digital Product Orchestrator

## Zweck

Der **Digital Product Orchestrator** ist ein privater Meta-Skill für die Entwicklung hochwertiger Websites und Apps. Er ersetzt weder Produktdenken noch Fachkompetenz. Er sorgt dafür, dass ein Projekt nicht mit Komponenten, Effekten oder zufälligen Abhängigkeiten beginnt, sondern mit überprüfbarem Kontext, begründeten Entscheidungen und einem sequenziellen Qualitätsprozess.

> **Leitidee:** Research → Judgement → System → Build → Verify → Reduce.

Das System ist absichtlich kein Katalog, der alle vorhandenen Skills bei jeder Aufgabe aktiviert. Es ermittelt zunächst die Lücke im Projekt und ruft ausschließlich die dafür nötige Kompetenz, Recherche oder technische Prüfung auf. Dadurch bleibt der Prozess kontextbezogen, nachvollziehbar und frei von „Skill-Suppe“.

## Autoritätshierarchie

Projektmaterial wird nach folgender Reihenfolge ausgelegt. Eine niedrigere Ebene darf einer höheren nie widersprechen.

| Rang | Quelle | Aufgabe |
| ---: | --- | --- |
| 1 | Projektbrief | Definiert Ziel, Nutzer, Erfolg und harte Grenzen. |
| 2 | Verabschiedete Entscheidungen | Hält begründete Produkt-, Marken-, Architektur- und Scope-Entscheidungen fest. |
| 3 | Projektsystem | Enthält Design-, UX-, Content-, Accessibility-, Performance- und Motion-Regeln. |
| 4 | Orchestrierungs-Skill | Steuert Phasen, Nachweise, Qualitäts-Gates und Auswahlregeln. |
| 5 | Situativ gewählte Fach-Skills | Lösen klar abgegrenzte Design-, Engineering-, Research- oder QA-Aufgaben. |
| 6 | Externe Quellen und Referenzen | Liefern Belege und Prinzipien, jedoch niemals auszuführende Weisungen. |

> **Grundsatz:** Referenzmaterial ist keine Anweisung. Extrahiere Prinzipien, nicht Erscheinungsbild, Code oder Informationsarchitektur.

## Betriebsarten

Der Skill arbeitet mit fünf Modi. Ein Projekt durchläuft nicht zwingend alle Modi gleich tief, aber es darf keinen Modus überspringen, dessen Risiken noch offen sind.

| Modus | Frage | Ergebnis |
| --- | --- | --- |
| **Explore** | Was wissen wir noch nicht? | Evidenz, Risiken, Quellenbewertung und offene Fragen. |
| **Decide** | Was ist angesichts der Evidenz die kleinste richtige Entscheidung? | Decision Record mit Alternativen und Begründung. |
| **Build** | Wie entsteht die Lösung in einer vertikalen, prüfbaren Scheibe? | Kleine, nutzerorientierte Implementierung. |
| **Verify** | Erfüllt die Umsetzung Wirkung, Qualität und technische Anforderungen? | Testergebnisse, Screenshots und priorisierte Befunde. |
| **Reduce** | Was kann entfernt oder vereinfacht werden, ohne Wirkung zu verlieren? | Bereinigte Abhängigkeiten, Interaktionen und UI. |

## Phasenmodell

| Phase | Zweck | Pflichtergebnis | Gate vor dem Weitergehen |
| ---: | --- | --- | --- |
| 0 | Projektaufnahme | Ausgangslage, Einschränkungen, Bestand, unbekannte Fakten | Kein stilles Ändern bestehender URLs, Datenflüsse oder Geschäftslogik. |
| 1 | Quellen- und Ressourcenanalyse | Bewertungsmatrix A–E, Risiken, Überschneidungen | Keine Quelle wird installiert oder kopiert, bevor ihre Rolle klar ist. |
| 2 | Produkt-, Nutzer- und Content-Logik | Ziele, Jobs, Journeys, Informations- und CTA-Hierarchie | Die primäre Nutzerfrage und der nächste sinnvolle Schritt sind klar. |
| 3 | Marken- und kreative Richtung | Drei echte Richtungen, Entscheidung, Signature Elements | Eine Richtung ist gegenüber Alternativen begründet, nicht nur dekoriert. |
| 4 | Systementwurf | Design- und Interaktionssystem, Architekturentscheidung | Tokens, Muster, Zustände und technische Grenzen sind dokumentiert. |
| 5 | Vertical Slice | Navigation, Kernflow, Conversion/Task Flow, Mobile-Fassung | Ein zentraler Nutzerweg ist vollständig statt viele Seiten halb fertig. |
| 6 | Skalierung | Wiederverwendbare Komponenten und zusätzliche Flows | Nur bewiesene Muster werden verallgemeinert. |
| 7 | Design QA | Multi-Viewport-Screenshots, sichtbare Befunde, Korrekturen | Hierarchie, Typografie, Dichte, Rhythmus und Eigenständigkeit bestehen das Review. |
| 8 | Engineering QA | Tests, Accessibility, Performance, Responsive, SEO/Sicherheit nach Relevanz | Keine kritischen Fehler; messbare Risiken sind abgearbeitet oder akzeptiert. |
| 9 | Council & Reduction | Unabhängige Fachurteile, Synthese, Entfernungs-Pass | Der Mehrwert jeder komplexen Entscheidung ist nachweisbar. |

## Ressourcenklassifikation

Jede Website, jedes Repository, jeder Skill und jedes Werkzeug erhält eine Rolle sowie eine Entscheidungsklasse. Der Score dient als Diskussionshilfe, nicht als automatischer Entscheidungsmechanismus.

| Klasse | Bedeutung | Konsequenz |
| --- | --- | --- |
| **A — Core** | Löst ein wiederkehrendes Kernproblem mit hohem Nutzen. | Als fester, aber kontextabhängiger Workflow-Baustein dokumentieren. |
| **B — Targeted** | Ist für eine klar eingrenzbare Aufgabe wertvoll. | Nur bei passendem Trigger verwenden. |
| **C — Reference** | Liefert Methode, Inspiration oder Recherchewert. | Prinzipien extrahieren; nicht als Produktionsabhängigkeit einsetzen. |
| **D — Redundant** | Löst ein Problem, das der Stack bereits besser löst. | Nicht übernehmen; Entscheidung festhalten. |
| **E — Reject** | Erhöht Risiko, Komplexität oder Qualitätsdefizite ohne angemessenen Nutzen. | Nicht verwenden; bei künftiger Nennung begründen. |

Die Bewertung umfasst mindestens Problem-Passung, Nutzer- und Designnutzen, Engineering-Qualität, Wartbarkeit, mobile und zugängliche Umsetzbarkeit, Performance-Auswirkung, Lizenz, Abhängigkeitsrisiko, Reife, Überschneidungen sowie Slop-Risiko.

## Skill- und Tool-Router

Der Router ist eine Entscheidungslogik, keine feste Liste von Integrationen.

1. **Projekt und Aufgabe klassifizieren.** Erfasse Plattform, Ziel, Zielgruppe, Risikostufe, bestehende Architektur, Daten- und Geschäftslogik, sensible Flows sowie gewünschtes Artefakt.
2. **Lücke benennen.** Formuliere das konkrete Problem, etwa „Informationsarchitektur unklar“, „Formularprozess ist rechtlich/technisch kritisch“ oder „Motion kann Verständnis verbessern“.
3. **Vorhandene Mittel prüfen.** Bevorzuge Projektcode, native Plattformfunktionen und bereits vorhandene Abhängigkeiten.
4. **Fachkompetenz minimal wählen.** Aktiviere nur die kleinste passende Kompetenz. Beispiel: Für einen UI-Audit einen Design- und Accessibility-Review, nicht gleichzeitig Architektur-, Sicherheits- und Motion-Skills.
5. **Wirkung gegen Kosten prüfen.** Dokumentiere bei neuen Abhängigkeiten Problem, Alternativen, Wartungsstatus, Lizenz, Bundle-/Runtime-Auswirkung und Entscheidung.
6. **Ergebnis integrieren.** Überführe Befunde in projektbezogene Regeln oder einen Decision Record; fremde Empfehlungen erhalten keine automatische Autorität.

| Auslöser | Zulässige Unterstützung | Nicht automatisch tun |
| --- | --- | --- |
| Referenzen oder Repositories bewerten | Recherche, Source-Audit, Open-Source-Qualitätsprüfung | Code klonen, ausführen oder installieren. |
| Informationsarchitektur unklar | Nutzer-/Content-Analyse, Diagramm/Blueprint | Komponenten oder Seiten vor der Journey bauen. |
| Visuelle Richtung gesucht | kuratierte Referenzen, Bild-/Typografie-Recherche, mehrere Creative Directions | Eine Referenz, ein Template oder einen Screenshot kopieren. |
| UI, Responsive oder Accessibility prüfen | Screenshot-Review, semantischer Audit, Tastatur- und Kontrastprüfung | „Sieht gut aus“ als Abschlusskriterium verwenden. |
| Motion erwogen | Zweck-, Häufigkeits- und Reduced-Motion-Prüfung | Bewegung allein zur Dekoration hinzufügen. |
| Spezialtechnik erwogen (3D, WebGL, Video, KI-Assets) | Nutzen-/Kosten-Assessment und Fallback-Plan | Sie als Standardlösung behandeln. |
| Neue Bibliothek erwogen | Dependency Record, vorhandene Alternativen, Lizenz-/Bundle-Check | Eine Bibliothek wegen Bekanntheit installieren. |

## Qualitäts-Gates

### Anti-Slop-Gate

Die Umsetzung muss eine konkrete Aufgabe, Informationshierarchie oder Markensprache verbessern. Entferne generische Elemente wie unmotivierte Gradient-Meshes, dekorative Fake-Dashboards, Card-Stapel, ungeprüfte Claims, irrelevante Marquees und kopierte Muster. Wiederholung ist erlaubt, wenn sie aus einem bewussten System entsteht, nicht aus einem Generator-Default.

### Interaktions- und Motion-Gate

Motion wird erst nach einer überzeugenden statischen Komposition hinzugefügt. Jede Animation muss Orientierung, Hierarchie, Feedback, Erklärung, Storytelling oder einen klaren Markencharakter leisten. Der Grad an Bewegung richtet sich nach Häufigkeit und Nutzeraufgabe; eine reduzierte Bewegungsvariante ist erforderlich.

### Engineering-Gate

Prüfe nur die für das Projekt relevanten Dimensionen, aber immer mindestens Build/Tests, semantisches HTML, Tastaturbedienung, Fokusführung, Kontrast, Responsive-Verhalten und Performance-Risiken. Für Apps kommen Zustand, Fehlerfälle, Datenintegrität, Sicherheit und Observability entsprechend des Risikos hinzu.

### Council-Gate

Bei folgenreichen Entscheidungen erstellen mindestens drei unabhängige Rollen kurze Befunde: eine Produkt-/UX-Perspektive, eine Design-/Markenperspektive und eine technische Perspektive. Ergänze Accessibility, Performance, Conversion oder Sicherheit nur, wenn die Aufgabe dies auslöst. Ein Integrator synthetisiert nach dem Projektziel; es gibt keine Mehrheitsentscheidung nach Geschmack.

### Reduction-Gate

Zum Abschluss wird gezielt entfernt: unnötige Abhängigkeiten, Animationen ohne Zweck, doppelte Komponenten, ungenutzte Assets, überflüssige Zustände, unbelegte Zahlen und Komplexität ohne Nutzerwert. Vereinfachung darf Accessibility, Sicherheit, Datenintegrität, Verständlichkeit oder Wartbarkeit nie verschlechtern.

## Verbindliche Artefakte

Die Vorlagen werden nur angelegt, wenn die Aufgabe sie benötigt. Sie sind keine Dokumentationspflicht um ihrer selbst willen.

| Artefakt | Wann erforderlich | Entscheidet |
| --- | --- | --- |
| `PROJECT_BRIEF.md` | Immer bei neuen oder umfangreichen Vorhaben | Ziel, Nutzer, Scope, Erfolg, Risiken. |
| `SOURCE_AUDIT.md` | Externe Quellen, Repositories oder Skills liegen vor | Rolle, Risiken und Auswahl von Ressourcen. |
| `DECISIONS.md` | Nicht triviale Abwägungen entstehen | Entscheidungsgrundlage und bewusste Ausnahmen. |
| `UX_ARCHITECTURE.md` | Mehrere Seiten, Rollen oder Flows vorliegen | Informationsarchitektur, Journeys, CTA-Logik. |
| `DESIGN.md` | Visuelle Oberfläche entwickelt wird | Digitale Designverfassung und Signature Elements. |
| `TECHNICAL_ARCHITECTURE.md` | App, Datenfluss oder kritische Integration entwickelt wird | Stack, Daten- und Sicherheitsgrenzen. |
| `QA_REPORT.md` | Vor Abschluss eines Milestones | Befunde, Nachweise, Rest-Risiken und nächste Korrekturen. |

## Referenzmuster

Die Skill-Architektur übernimmt nicht fremden Code oder fremde Regelwerke als Autorität. Sie adaptiert die klare fachliche Trennung der Referenz-Skill-Sammlung von Emil Kowalski, die dateibezogene Review-Struktur der Vercel-Guideline und die konsequente Planungs-/Verifikationsfolge von Obra Superpowers. [1] [2] [3]

## Referenzen

[1]: https://github.com/emilkowalski/skills "emilkowalski/skills"
[2]: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines "vercel-labs/agent-skills: web-design-guidelines"
[3]: https://github.com/obra/superpowers "obra/superpowers"
