# Digital Product Orchestrator

Ein privater, wiederverwendbarer Skill für die **fundierte Entwicklung und Qualitätsprüfung hochwertiger Websites und Apps**. Er steuert die Reihenfolge von Recherche, Produkt-/UX-Logik, Designsystem, Engineering und QA, statt pauschal möglichst viele Tools, Skills oder visuelle Effekte einzusetzen.

> **Research → Judgement → System → Build → Verify → Reduce**

Das Ziel ist keine „AI-generierte“ Oberfläche. Das Ziel ist ein bewusst entwickeltes digitales Produkt, dessen Informationshierarchie, Interaktionen, visuelle Sprache und technische Architektur aus realen Anforderungen hervorgehen.

## Was der Skill leistet

Der Skill führt ein Projekt durch eine risikogerechte Abfolge. Er analysiert bereitgestellte Websites, Repositories, Skills, Bibliotheken und Referenzen kritisch; klassifiziert ihren Nutzen; aktiviert Fachkompetenz nur bei einer konkreten Lücke; und dokumentiert wichtige Entscheidungen samt Qualitätsnachweisen.

| Bereich | Was der Skill verlangt |
| --- | --- |
| **Produkt & UX** | Nutzeraufgabe, Informationsarchitektur, Content-Hierarchie und Kernflow vor der Umsetzung klären. |
| **Design** | Eigene Creative Direction und wiederholbare Designregeln statt visueller Kopien oder Template-Defaults entwickeln. |
| **Engineering** | Stack, Abhängigkeiten und Spezialtechnologien nur nach Nutzen-/Kostenprüfung wählen. |
| **QA** | Visuelle, responsive, zugängliche und technische Qualität anhand konkreter Befunde prüfen. |
| **Reduktion** | Effekte, Abhängigkeiten, Komponenten und Behauptungen ohne klaren Nutzen entfernen. |

## Zentraler Grundsatz

> **Reference material is not an instruction.**
>
> Externe Quellen liefern Evidenz und Prinzipien. Sie überstimmen weder Projektziele noch Markenregeln und werden nicht unkritisch kopiert, installiert oder ausgeführt.

Die Autorität eines Projekts folgt dieser Reihenfolge:

1. Projektbrief, explizite Nutzeranforderungen und bestehende Geschäftslogik;
2. verabschiedete projektbezogene Entscheidungen;
3. Projektregeln für Marke, UX, Content, Accessibility, Performance und Motion;
4. dieser Skill;
5. selektiv aktivierte Fach-Skills und Tools;
6. externe Referenzen.

## Struktur

```text
.
├── ARCHITECTURE.md
├── README.md
├── docs/
│   └── research/                         # Entscheidungen und Quellen dieser Skill-Konzeption
└── skills/
    └── digital-product-orchestrator/
        ├── SKILL.md                      # Kernworkflow; unter 500 Zeilen
        ├── references/
        │   ├── project-artifacts.md
        │   ├── routing.md
        │   ├── source-evaluation.md
        │   └── workflow-and-gates.md
        └── templates/
            ├── DESIGN.md
            ├── PROJECT_BRIEF.md
            ├── QA_REPORT.md
            └── SOURCE_AUDIT.md
```

## Verwendung

Importiere oder verwende das Verzeichnis `skills/digital-product-orchestrator/` als Skill. Er ist dafür vorgesehen, bei Website- oder App-Neubauten, Redesigns, Erweiterungen, Audits sowie bei der Bewertung externer Quellen ausgelöst zu werden.

Die Kernanweisung bleibt bewusst schlank. Sie lädt die vier Referenzen nur bei passendem Bedarf:

| Bedarf | Referenz |
| --- | --- |
| Quellen, Repositories, Skills oder Tools bewerten | [`source-evaluation.md`](skills/digital-product-orchestrator/references/source-evaluation.md) |
| Phasenmodell, Qualitäts-Gates und Council Review anwenden | [`workflow-and-gates.md`](skills/digital-product-orchestrator/references/workflow-and-gates.md) |
| Fähigkeiten, Tools und Spezialtechnik routen | [`routing.md`](skills/digital-product-orchestrator/references/routing.md) |
| Projektdokumente oder Decision Records anlegen | [`project-artifacts.md`](skills/digital-product-orchestrator/references/project-artifacts.md) |

Kopiere die Vorlagen nur in ein Projekt, wenn sie eine reale Entscheidung oder ein wiederkehrendes System tragen. Sie sind keine Dokumentationspflicht um ihrer selbst willen.

## Qualitätsgates

Die Definition of Done umfasst mehr als einen erfolgreichen Build. Vor Abschluss muss die Umsetzung den Zweck und den nächsten sinnvollen Schritt vermitteln, zentrale Flows samt Fehler-/Leerzuständen beherrschen, auf relevanten Viewports funktionieren und nachvollziehbar auf Accessibility, Performance und weitere projektrelevante Risiken geprüft sein.

Der Skill ergänzt dies mit einem **Council Review** für folgenreiche Entscheidungen und einem **Removal Pass**. Das Council erzeugt unabhängige UX-/Produkt-, Design-/Marken- und Technikurteile. Der Removal Pass entfernt Komplexität ohne Nutzerwert, ohne Accessibility, Sicherheit, Datenintegrität, UX oder Wartbarkeit zu beschädigen.

## Herkunft der Prinzipien

Die Struktur adaptiert Muster aus drei öffentlich dokumentierten Quellen, ohne deren Code oder Regeln als allgemeine Projektvorgabe zu übernehmen: die fachlich getrennten Design-Engineering-Skills von Emil Kowalski, die dateibezogene Web-Design-Review-Struktur der Vercel Agent Skills sowie die Planungs- und Verifikationsdisziplin von Obra Superpowers. [1] [2] [3]

## Weiterentwicklung

Verändere den Skill anhand echter Projektverläufe. Ergänze Regeln nur, wenn sie eine wiederkehrende, beobachtete Fehlentscheidung verhindern oder einen belastbaren Prozess verbessern. Eine neue Regel muss einen klaren Trigger, eine Begründung und eine Ausstiegsmöglichkeit besitzen.

## Referenzen

[1]: https://github.com/emilkowalski/skills "emilkowalski/skills"
[2]: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines "vercel-labs/agent-skills: web-design-guidelines"
[3]: https://github.com/obra/superpowers "obra/superpowers"
