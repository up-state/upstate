# UpState

## About

TODO

## Development

### Requirements

- [Node.js 12](https://nodejs.org/)

### Getting Started

```sh
npm ci
# Start backend with frontend. The frontend will be served by a dev server that proxies requests to /api through to the backend server.
npm run dev

# Build frontend and backend
npm run build

# Run in production. Requires `npm run build` to have been run beforehand.
npm start
```

### Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### Conventions

#### Code Formatting

This project uses the code formatter [prettier](https://prettier.io/) to format all code consistently.
Staged code is prettied in a git hook on-commit. Additionally it's recommended to setup your code editor for prettier.

- VSCode: [Prettier Plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- JetBrains:
  - [JetBrains Plugin Prettier](https://plugins.jetbrains.com/plugin/10456-prettier)
  - [Configuring Prettier for JetBrains IDEs](https://www.jetbrains.com/help/idea/prettier.html#ws_prettier_reformat_code)

## Tech Stack

- Vue.js 3
- Nest.js
