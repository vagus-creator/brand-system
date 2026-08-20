# Skill-Pattern-Audit

Stand: 20. August 2026

Dieses Dokument trennt bewusst **übertragbare Methodik** von **übernehmbarer Implementierung**. Das geplante private Skill wird keine externe Skill-Sammlung als Laufzeit-Abhängigkeit voraussetzen. Es orchestriert nur die im jeweiligen Arbeitskontext verfügbaren, passenden Fähigkeiten.

| Quelle | Beobachteter Nutzen | Übernommenes Prinzip | Entscheidung |
| --- | --- | --- | --- |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | Eng abgegrenzte, fachlich starke Regeln für Design- und Engineering-Entscheidungen. | Separiere Erzeugung, Review und Verbesserung; formuliere konkrete Anti-Fehler-Regeln statt vager Qualitätsbehauptungen. | **Referenz**: kein Fork, keine Abhängigkeit. |
| [vercel-labs/agent-skills: web-design-guidelines](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines) | Zeigt einen kleinen, klar auslösbaren Review-Skill mit frischer Richtlinienbasis. | Führe UI-Audits separat und dateibezogen durch; trenne Audit von Build. | **Supporting**: als optionaler Review-Schritt einplanen, falls verfügbar. |
| [obra/superpowers](https://github.com/obra/superpowers) | Sehr reifes Open-Source-Framework mit getrennten Skills für Planung, Debugging, Tests, Reviews und Abschlussprüfung. | Strikte Phasentrennung, Verifikation vor Abschluss und risikoproportionale Arbeitstiefe. | **Referenz**: Prinzipien adaptieren, nicht installieren oder kopieren. |
| Verifizierte Skill-Suche | Die Echtzeit-Abfrage schlug aufgrund einer fehlerhaften GitHub-API-Antwort fehl; der Cache lieferte für die breite Anfrage keine Treffer. | Die Orchestrierung darf nicht von einer Discovery-Quelle abhängen; Suche ist ein optionaler, fehlertoleranter Schritt. | **Kein Core-Baustein**. |

## Auswahlregel

Ein externer Skill, ein Repository oder ein Werkzeug wird nur herangezogen, wenn es eine klar definierte Lücke schließt und gleichzeitig **Nutzen, Wartbarkeit, Lizenz, Sicherheitsauswirkung, Performance-Auswirkung und vorhandene Alternativen** geprüft wurden. Inspirationsquellen und Prozessreferenzen werden nicht in die Projektlaufzeit eingebunden.

## Entwurfsfolgen

Das künftige Skill benötigt erstens eine verbindliche Projektaufnahme, zweitens eine Entscheidungsroute statt einer starren Toolliste, drittens dokumentierte Qualitäts-Gates und viertens schlanke Vorlagen für die entscheidungsrelevanten Artefakte. Es darf keine Designrichtung, Library oder komplexe Technologie voreinstellen.
