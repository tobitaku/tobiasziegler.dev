---
title: 'View Transitions in Astro 3 🚀'
pubDate: 2023-10-30
description: 'Astro 3 ist da und bietet neue Funktionen und Verbesserungen, eine davon sind View Transitions.'
author: 'Tobias Ziegler'
tags: ["astro", "transitions"]
---

>In der Welt des Webdesigns und der Webentwicklung ist es wichtig, auf dem neuesten Stand zu sein. Astro 3.0 und sein neues Feature - `<ViewTransitions />` - sind eine aufregende Entwicklung in diesem Bereich. In diesem Artikel betrachten wir diese Neuerung genauer, die die Erfahrung des Website-Navigierens verändert.

## Was ist Astro 3.0?

Bevor wir über `<ViewTransitions />` sprechen, schauen wir uns kurz Astro 3.0 an. Astro ist ein Framework zur statischen Site-Generierung, das in der Webentwicklung immer beliebter wird. Es ist schnell und effizient, da es Seiten vorab rendert und nur das benötigte JavaScript lädt. Dadurch werden Ladezeiten verkürzt und die Benutzererfahrung verbessert.

## Das Aufregende an `<ViewTransitions />`

`<ViewTransitions />` ist das neueste Feature von Astro 3.0, das die Navigation auf Websites auf die nächste Stufe bringt. Es ermöglicht seitenweise Ansichtsübergänge mit nur wenigen Zeilen Code, wodurch Seiteninhalte aktualisiert werden können, ohne den klassischen Full-Page-Reload zu benötigen.  Das Ergebnis sind nahtlose Animationen zwischen den Seiten, die die Benutzererfahrung erheblich verbessern.

## Eigenschaften von `<ViewTransitions />`

`<ViewTransitions />` in Astro 3.0 bietet eine Vielzahl von Optionen zur einfacheren Gestaltung und Steuerung von Seitenübergängen. Einige dieser Funktionen sind:

- Eingebaute Animationsoptionen wie `fade`, `slide` und `none`.
- Unterstützung von Vorwärts- und Rückwärtsnavigations-Animationen.
- Möglichkeit zur Anpassung aller Aspekte der Übergangsanimation sowie zur Erstellung benutzerdefinierter Animationen.
- Möglichkeit, die Navigation auf der Client-Seite für Nicht-Seiten-Links zu verhindern.
- Regulierung des Ausweichverhaltens für Browser ohne Unterstützung der `<ViewTransitions />` APIs.
- Automatische Unterstützung von `prefers-reduced-motion`.

## Wie aktiviert man `<ViewTransitions />`?

Standardmäßig verwendet jede Seite in Astro die übliche Browser-Navigation. Um `<ViewTransitions />` zu aktivieren, müssen diese explizit eingeschaltet werden und können seitenweise oder für die gesamte Website aktiviert werden. Um View-Transitions auf einer Seite zu aktivieren, importiere die `<ViewTransitions />` Komponente und füge sie dem <head> der Seite hinzu. Wenn du die Komponente für die gesamte Website aktivieren möchtest, binde sie in einen gemeinsamen Header oder ein Layout ein.

```astro
---
import { ViewTransitions } from 'astro:transitions';
---
<html lang="en">
  <head>
    <title>Meine Seite</title>
    <ViewTransitions />
  </head>
  <body>
    ...
  </body>
</html>
```

## `<ViewTransitions />` und Barrierefreiheit
### Route Announcer
Bei der Einführung neuer Webtechnologien liegt ein wichtiger Fokus auf der Barrierefreiheit. `<ViewTransitions />` in Astro enthalten einen Route-Announcer, der out-of-the-box für das clientseitige Routing funktioniert. Unterstützende Technologien informieren den Nutzer einer Webseite durch eine Änderung des Seitentitels darüber, dass eine neue Seite aufgerufen wurde.

### prefers-reduced-motion
Astro's `<ViewTransitions />` enthalten eine Media Query, die die Einstellung `prefers-reduced-motion` überprüft und dementsprechend alle Übergänge deaktiviert.

## Fazit

`<ViewTransitions />` ist eine neue und aufregende Funktion in Astro 3.0. Sie verändert die Art und Weise, wie wir das Navigieren auf Websites erleben, indem sie lückenlose Übergänge zwischen den Seiten ermöglicht. Dadurch wird die Benutzererfahrung verbessert.