---
title: 'NestJS Basics - Eine Einführung in das moderne Node.js-Framework 🐈'
pubDate: 2023-11-06
author: 'Tobias Ziegler'
timeToRead: '2-3 Minuten'
tags: ['nestjs', 'rest', 'api']
bannerImage:
  src: '/blog/nest-banner.webp'
  alt: 'NestJS Banner'
---

> NestJS ist ein auf Node.js basierendes Framework, das sich in den letzten Jahren als eine beliebte Wahl für die Entwicklung von serverseitigen Anwendungen und APIs etabliert hat. Mit seiner Modulstruktur, dem Dependency Injection-System und der Unterstützung für TypeScript bietet NestJS eine solide Grundlage für die Erstellung skalierbarer und gut strukturierter Anwendungen. In diesem Blogartikel werden wir die Grundlagen von NestJS erkunden und einige Code-Beispiele verwenden, um die Konzepte zu veranschaulichen.

## Installation von NestJS

Bevor wir mit NestJS starten, muss Node.js und npm (Node Package Manager) auf unserem System installiert sein. Wenn dies erledigt ist, kann NestJS mithilfe des folgenden Befehls über die Befehlszeile installiert werden:

```bash
npm install -g @nestjs/cli
```

Nach der Installation können wir ein neues NestJS-Projekt erstellen:

```bash
nest new my-nest-app
```

## Controller

Controller sind eine essenzielle Komponente in NestJS. Sie haben die Aufgabe, HTTP-Anfragen zu verarbeiten und die entsprechenden Antworten zu generieren.Hier ist ein einfaches Beispiel für einen Controller:

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'Alle Katzen werden hier aufgelistet';
  }
}
```

In diesem Beispiel wird ein Controller mit dem Namen `CatsController` erstellt, der Anfragen unter dem Pfad `/cats` bearbeitet. Bei einer HTTP-GET-Anfrage an `/cats` wird die Methode `findAll` aufgerufen, welche einen Text zurückgibt.

## Module

Module sind in NestJS der Mechanismus zur Organisation und Strukturierung des Codes. Hier ist ein einfaches Beispiel für ein Modul:

```typescript
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule {}
```

In diesem Beispiel erstellen wir ein Modul namens `CatsModule`, welches den `CatsController` beinhaltet. Module sind dafür verantwortlich, Controller, Services und andere Komponenten zu bündeln sowie die Verwaltung von Abhängigkeiten.

## Service

Services kümmern sich in NestJS um die Business-Logik und können in Controllern oder anderen Services genutzt werden. Hier ist ein einfaches Beispiel für einen Service:

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats: string[] = ['Gustav', 'Felix', 'Whiskers'];

  findAll(): string[] {
    return this.cats;
  }
}
```

In diesem Beispiel erstellen wir einen Service namens `CatsService`, der eine Methode `findAll` enthält, um eine Liste von Katzen zurückzugeben.

## Dependency Injection

Eine der Stärken von NestJS ist das Dependency Injection-System, mit dem Abhängigkeiten einfach verwaltet und getestet werden können. Hier ist ein Beispiel, wie wir den `CatsService` in unserem `CatsController` verwenden können:

```typescript
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }
}
```

Durch die Deklaration des Parameters `catsService` im Konstruktor des Controllers können wir den Service in der Methode verwenden.

## Fazit

NestJS bietet eine solide Grundlage für die Entwicklung von serverseitigen Anwendungen und APIs in Node.js. In diesem Artikel haben wir die grundlegenden Konzepte von NestJS wie Controller, Module, Services und Dependency Injection behandelt. Dies ist jedoch nur ein kleiner Einblick in die vielfältigen Möglichkeiten, die NestJS bietet. NestJS ist eine mächtige Plattform, die die Entwicklung von Node.js-Anwendungen erheblich vereinfacht und beschleunigt.
