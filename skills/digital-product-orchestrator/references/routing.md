# Routing für Fähigkeiten, Tools und Spezialtechnik

Nutze diese Referenz, bevor zusätzliche Fähigkeiten, externe Repositories, Libraries oder Produktionswerkzeuge einbezogen werden. Routing ist ein minimaler Entscheidungsprozess, keine automatische Aufrüstung.

## Router

1. **Aufgabe verstehen.** Benenne Nutzerziel, Projektphase, Plattform, kritischen Flow und Erfolgskriterium.
2. **Lücke isolieren.** Formuliere die fehlende Kompetenz oder Information ohne Namen einer vorweggenommenen Lösung.
3. **Vorhandene Mittel prüfen.** Nutze Projektcode, Plattformmittel, bestehende Abhängigkeiten und dokumentierte Regeln zuerst.
4. **Kleinste passende Hilfe wählen.** Wähle genau eine primäre Fachkompetenz. Ergänze eine zweite nur, wenn sie ein unabhängiges Risiko abdeckt.
5. **Grenzen setzen.** Definiere erwartetes Ergebnis, Ausführungsgrenze und Abbruchkriterium.
6. **Ergebnis integrieren.** Übernimm Fakten, Befunde und Entscheidungen in Projektdokumente; übernimm keine fremde Autorität.

## Entscheidungsmatrix

| Projektlücke | Geeignete Unterstützung | Ergebnis | Ausschlussregel |
| --- | --- | --- | --- |
| Markt, Nutzer oder Domäne unklar | Mehrquellen-Recherche, Primärquellen, Interview-/Artefaktanalyse | Evidenz und offene Fragen | Keine Designrichtung aus Trendbildern ableiten. |
| Websites, Repos oder Skills werden genannt | Source Audit, Lizenz-/Reifeprüfung, Overlap-Analyse | A–E-Entscheidung | Nichts installieren, klonen oder ausführen. |
| Informationsarchitektur, Journey oder Prozess unklar | UX-Architektur, Blueprint, Diagramm | Nutzerweg und Zustände | Keine Seite vor dem Kernflow bauen. |
| Visuelles System fehlt | Referenzanalyse, Typografie-/Asset-Recherche, Creative Directions | Eigene Prinzipien und `DESIGN.md` | Keine visuelle Kopie und keine ungeprüften Fonts. |
| Content unklar | Content-Architektur, Evidenzprüfung, Nachrichtentests | Hierarchie, Proof, CTA-/Task-Logik | Keine erfundenen Zahlen, Testimonials oder Awards. |
| UI-Interaktion unklar | Component-/Interaction-Design, Accessibility-Review | Zustände, Feedback und Bedienverhalten | Keine handgebaute Zugänglichkeit, wenn eine geprüfte Plattformlösung nötig ist. |
| Motion erwogen | Motion-Review, Zweck-/Frequenzprüfung | Motion-Spezifikation und Reduced-Motion-Verhalten | Keine Bewegung ohne funktionalen oder klaren Markenwert. |
| Neue Library oder CLI nötig | Maintained-OSS-Suche, Dependency Record | Begründete Auswahl | Keine Entscheidung allein nach Stars, Bekanntheit oder Demo-Ästhetik. |
| Daten, Authentifizierung oder Zahlung | Security-, Datenfluss- und Fehlerfall-Audit | Threat/Failure Modell und Testplan | Keine Abkürzung über clientseitige Scheinsicherheit. |
| Umfangreiche oder kritische Oberfläche fertig | Multi-Viewport-Review, a11y/performance/UX QA | Priorisierte Befunde und Nachtests | Kein Abschluss bei reinem Build-Erfolg. |

## Spezielle Technologien

### 3D, WebGL, Scroll-Scrubbing und filmische Erlebnisse

Verwende nur als gezielte Spezialtechnik. Verlange vor dem Build eine schriftliche Antwort auf:

- Welchen Teil der Geschichte, Erklärung oder Aufgabe verbessert das Erlebnis?
- Welche mobile Variante und welcher Fallback existieren?
- Welche Last erzeugen Assets, CPU/GPU, Netzwerk, LCP und Wartung?
- Was geschieht ohne JavaScript oder bei reduzierter Bewegung?
- Welche einfachere Alternative liefert mindestens 80 % der Wirkung?

Klassifiziere die Technik standardmäßig als **B — Targeted** oder **C — Reference**, niemals als universellen Default.

### Bild-, Video- und Motion-Produktion

Unterscheide ein Produktionswerkzeug von einer Laufzeitabhängigkeit. Nutze Generatoren, Videoschnitt oder Animationswerkzeuge für bewusst benötigte Assets. Bette sie nicht in das Produktions-Bundle ein, nur weil sie bei der Erstellung hilfreich waren.

Definiere für jedes Asset Zweck, Format, Größenbudget, Alt-/Fallback-Strategie, Rechte und Entfernungskriterium.

### Fonts

Wähle Schriften nicht allein nach Ästhetik. Prüfe Originalquelle, Lizenz, kommerzielle Nutzbarkeit, Zeichensatz, variable Schnitte, Ladegewicht, Fallback-Metriken, Caching und CLS-Risiko vor der Integration.

## Dependency Record

```md
## Dependency: [Name, Version]

- **Problem:**
- **Vorhandene Alternativen:**
- **Warum diese nicht reichen:**
- **Wartung und Reife:**
- **Lizenz:**
- **Bundle-/Runtime-Auswirkung:**
- **Accessibility-/Security-Folge:**
- **Entscheidung:** installieren / nicht installieren / später prüfen
- **Rückbauweg:**
```

## Stop-Conditions

Stoppe und kläre nach, statt zu raten, wenn die Entscheidung Rechts-, Sicherheits-, Zahlungs-, Authentifizierungs-, Datenschutz-, Markenfreigabe- oder irreversibles Migrationsrisiko berührt. Stoppe außerdem bei widersprüchlichen Projektregeln oder fehlendem Besitzrecht für bereitgestellte Assets und Inhalte.
