# Brand System – Monorepo

Ein professionelles Design-System-Monorepo, das markenkonforme Websites (Landing Pages) und Slide Decks (Präsentationen) auf höchstem Designer-Niveau vereint. Entwickelt für Skalierbarkeit, Performance und Multi-Brand-Fähigkeit.

## Architektur & Technologie

Dieses Repository nutzt **Turborepo** und **pnpm** für maximale Performance und orchestriert folgende Kernbereiche:

1. **Design Tokens (`packages/tokens`)**: Die Single Source of Truth. Definiert Farben, Typografie, Spacing und Schatten im DTCG-Format. *Style Dictionary* kompiliert diese zu CSS Custom Properties, Tailwind Configs und JSON.
2. **UI Library (`packages/ui`)**: Wiederverwendbare Astro-Komponenten (Buttons, Cards, Sections, Navbars), die direkt an die Design Tokens gebunden sind.
3. **Websites (`apps/web`)**: Ein blitzschnelles Landing-Page-Template basierend auf **Astro** und **Tailwind CSS v4**. Null JavaScript im Client, perfekte Lighthouse-Scores.
4. **Slide Decks (`apps/slides`)**: Code-basierte Präsentationen mit **Slidev**. Markdown-Authoring kombiniert mit Vue-Komponenten, eingebunden in ein Custom Theme, das auf den Design Tokens aufbaut.

## Ordnerstruktur

```text
brand-system/
├── packages/
│   ├── tokens/          # Design Tokens (Style Dictionary)
│   ├── ui/              # Shared UI-Komponenten (Astro)
│   └── config/          # Shared ESLint/Prettier Configs
├── apps/
│   ├── web/             # Astro Landing-Page-Template
│   └── slides/          # Slidev Präsentations-Template
├── themes/
│   └── default/         # Standard-Brand-Theme (Overrides)
├── turbo.json           # Turborepo Konfiguration
└── pnpm-workspace.yaml  # pnpm Workspace Konfiguration
```

## Erste Schritte

### 1. Installation

Stelle sicher, dass [Node.js](https://nodejs.org/) (v18+) und [pnpm](https://pnpm.io/) installiert sind.

```bash
pnpm install
```

### 2. Design Tokens kompilieren

Bevor die Apps gestartet werden können, müssen die Design Tokens gebaut werden:

```bash
pnpm tokens:build
```
*Dies generiert die CSS-Variablen und die Tailwind-Konfiguration in `packages/tokens/dist/`.*

### 3. Entwicklungsumgebung starten

**Gesamtes Monorepo (Web + Slides) starten:**
```bash
pnpm dev
```

**Nur die Website (Astro) starten:**
```bash
pnpm web:dev
```
*Öffnet sich unter http://localhost:4321*

**Nur die Präsentation (Slidev) starten:**
```bash
pnpm slides:dev
```
*Öffnet sich unter http://localhost:3030*

## Multi-Brand Workflow (Neuer Kunde / Neue Marke)

Das System ist darauf ausgelegt, leicht an neue Marken angepasst zu werden:

1. Kopiere den Ordner `themes/default` und benenne ihn nach dem neuen Kunden (z.B. `themes/client-x`).
2. Passe die Farb- und Typografie-Werte in `themes/client-x/tokens.json` an.
3. Überschreibe bei Bedarf die primitiven Tokens in `packages/tokens/src/primitives/`.
4. Führe `pnpm tokens:build` aus.
5. Sowohl die Astro-Website als auch das Slidev-Deck erstrahlen nun im neuen Branding.

## Build & Export

### Website bauen
```bash
pnpm web:build
```
*Die statischen Dateien liegen in `apps/web/dist/` und können auf Vercel, Netlify oder jedem statischen Hoster deployed werden.*

### Slide Deck als PDF exportieren
```bash
cd apps/slides
pnpm export
```
*Generiert ein hochauflösendes PDF der Präsentation.*

## Lizenz

Proprietär / Internes gelten die individuellen Nutzungsbedingungen.
