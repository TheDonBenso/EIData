# React Latest Upgrade Runbook

This guide upgrades this project from Create React App + React 16 to the latest React and related frontend packages.

## Why this path

- The current stack uses `react-scripts` 3.x, which is tied to older tooling.
- Moving to the latest React is most reliable by migrating from CRA to Vite.
- This runbook keeps the current app code structure and focuses on toolchain/dependency modernization.

## Current baseline in this repo

- React: `^16.8.6`
- React DOM: `^16.8.6`
- CRA scripts: `^3.0.1`
- Recharts: `^1.6.2`

Source: [package.json](package.json)

## Target outcome

- Latest React and React DOM installed with `@latest`
- Latest Recharts and other React ecosystem dependencies
- Vite as build/dev tool
- App runs, tests pass (or known test gaps are documented)

## Step 0: Create a safe branch

```bash
git checkout -b chore/upgrade-react-latest
```

## Step 1: Remove CRA-only dependency

```bash
npm remove react-scripts
```

## Step 2: Install latest runtime deps

Use `@latest` so the command always resolves to the newest stable versions.

```bash
npm install react@latest react-dom@latest recharts@latest react-input-autosize@latest
```

If `react-input-autosize` causes peer dependency conflicts, either:

- Replace it with a normal `<input>` (if autosizing is not required), or
- Pin to the newest version that supports the installed React major.

## Step 3: Install Vite toolchain

```bash
npm install -D vite@latest @vitejs/plugin-react@latest
```

## Step 4: Update scripts in package.json

In [package.json](package.json), replace scripts with:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "test": "vitest"
}
```

If you are not adopting tests immediately, you can temporarily omit `test` or keep a placeholder command.

## Step 5: Add Vite config

Create `vite.config.js` at repo root:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

## Step 6: Update index.html for Vite

In [public/index.html](public/index.html):

- Move content to root-level `index.html` (Vite expects root index)
- Ensure mount node exists: `<div id="root"></div>`
- Add module entry:

```html
<script type="module" src="/src/index.js"></script>
```

Then remove the old CRA-only `public` template tokens like `%PUBLIC_URL%` if present.

## Step 7: Update React entrypoint for modern React DOM API

In [src/index.js](src/index.js), replace `ReactDOM.render` with `createRoot`:

```js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './css/index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
```

Also remove service worker wiring from this file unless PWA support is intentionally kept and reimplemented for Vite.

## Step 8: Keep compatibility for existing app code

Files likely unaffected by React version bump but should be smoke-tested:

- [src/App.js](src/App.js)
- [src/ParameterComponent.js](src/ParameterComponent.js)
- [src/ResultsComponent.js](src/ResultsComponent.js)
- [src/ChartComponent.js](src/ChartComponent.js)

## Step 9: Verify

```bash
npm install
npm run dev
npm run build
```

Optional if tests are wired:

```bash
npm test
```

## Step 10: React ecosystem cleanup

- Remove obsolete CRA files if no longer used:
  - [src/serviceWorker.js](src/serviceWorker.js)
- Remove CRA-only config assumptions from docs and scripts.
- Confirm chart rendering with selected countries and trade type.

## Troubleshooting

### Peer dependency conflicts

Use this to inspect constraints:

```bash
npm ls react react-dom recharts react-input-autosize
```

Then either:

- Upgrade the conflicting package to latest, or
- Replace the incompatible package with an actively maintained alternative.

### Build compiles but charts fail at runtime

Focus first on:

- [src/useController.js](src/useController.js)
- [src/ChartComponent.js](src/ChartComponent.js)

There are known state/data-shaping inconsistencies in this area that can surface during dependency upgrades.

## Definition of done

- Dev server starts with `npm run dev`
- Production build succeeds with `npm run build`
- Country selection and chart rendering work end-to-end
- `package.json` no longer depends on `react-scripts`
- React and React DOM are installed from `@latest`
