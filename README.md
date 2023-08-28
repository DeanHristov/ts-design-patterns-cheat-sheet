# Motivation

Basically, the design patterns are typical solutions to commonly occurring problems in software engineering. They act as
pre-made blueprints that we can customize to solve recurring design problems within our code.

My point is to show you how they are structured (according to me) by examples. I am going to try to cover the most
common [design patterns](https://en.wikipedia.org/wiki/Design_Patterns) and within this repo, also I am going to
use [TypeScript](https://www.typescriptlang.org/) as a programming language.

**I haven't used any kind of AI tools like ChatGPT, CoPIlot, or any other "crutches" for the mind.**

## Included Patterns

- [Creational](https://en.wikipedia.org/wiki/Creational_pattern)
  - Factory
  - Abstract Factory
  - Builder
  - Prototype
  - Singleton
- [Structural](https://en.wikipedia.org/wiki/Structural_pattern)
  - Decorator
  - Adapter
  - Facade
  - Bridge
  - Composite
  - Flyweight
  - Proxy
- [Behavioral](https://en.wikipedia.org/wiki/Behavioral_pattern)
  - Command
  - Chain of Responsibility
  - Observer Pattern
  - Interpreter
  - Iterator
  - Mediator
  - Memento
  - State
  - Strategy
  - Template
  - Visitor

## Requirements

- [Node](https://nodejs.org/en/) `^16.15.0`
- [NPM](https://www.npmjs.com/) `^8.5.5`

## Installation

After confirming that your environment meets the above [requirements](#requirements), it is time to clone the project
ocally by doing the following:

```bash
$ git clone git@github.com:DeanHristov/ts-design-patterns-cheat-sheet.git <project-name>
$ cd <project-name>
```

When you're done with the steps above, run the following command:

```bash
$ npm install # or yarn install
```

## Running the Project in development mode.

Running the app in **development** mode with [HMR](https://www.npmjs.com/package/nodemon).

```bash
$ npm run start:dev
```

## Running the Project in production mode.

Firstly, build the app with the following command:

```bash
$ npm run build
```

Then run following command to start the app in **production** mode.

```bash
$ npm start
```

## Main tasks

All tasks automation are based on [NPM scripts](https://docs.npmjs.com/misc/scripts).

| Tasks                     | Description                                           |
|---------------------------|-------------------------------------------------------|
| `npm run start:dev`       | Running the app in **dev** mode                       |
| `npm run build`           | Building the code in **production-ready** mode        |
| `npm run start`           | Running the app in **prod** mode                      |
| `npm run test`            | Running the unit tests ( using jest)                  |
| `npm run test:dev`        | Running the unit with `--watchAll` mode ( using jest) |
| `npm run lint`            | Code lining                                           |
| `npm run prettier-format` | Code formatting                                       |

## Used technologies

- NodeJS- https://nodejs.org/en/
- Git - https://git-scm.com/
- TypeScript - https://www.typescriptlang.org/

## NPM Packages

- [typescript](https://www.npmjs.com/package/typescript)
- [prettier](https://www.npmjs.com/package/prettier)
- [ts-jest](https://www.npmjs.com/package/ts-jest)
- [jest](https://www.npmjs.com/package/jest)
- [ts-node](https://www.npmjs.com/package/ts-node)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier)
- [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier)
- [rimraf](https://www.npmjs.com/package/rimraf)
- [nodemon](https://www.npmjs.com/package/nodemon)

## Made by

Author: [D. Hristov](https://dhristov.eu/) | Version: 1.0.0 |
License: [MIT](https://opensource.org/licenses/MIT)
