# AGENTS.md

## Project Summary

This repository is a small Create React App frontend for exploring East African trade data by country and trade type.

- The UI lets a user pick countries and a trade mode, then renders bar charts for the selected countries.
- There is no backend in this repo.
- The main dataset currently lives in [src/GlobalState.js](src/GlobalState.js), not in [data.json](data.json).

## What The App Does

- [src/App.js](src/App.js) mounts the app shell.
- [src/ParameterComponent.js](src/ParameterComponent.js) captures selected countries and trade mode.
- [src/ResultsComponent.js](src/ResultsComponent.js) renders one chart per selected country.
- [src/ChartComponent.js](src/ChartComponent.js) displays yearly totals with `recharts`.
- [src/useController.js](src/useController.js) is the data-shaping hook between context state and chart props.

## Commands

- Install: `npm install`
- Dev server: `npm start`
- Tests: `npm test`
- Production build: `npm run build`

## Key Files

- [package.json](package.json): CRA scripts and React 16-era dependencies.
- [src/GlobalState.js](src/GlobalState.js): global context plus the hardcoded country trade dataset.
- [src/useController.js](src/useController.js): derives chart data from selected state.
- [src/ChartComponent.js](src/ChartComponent.js): Recharts bar chart rendering.
- [src/App.test.js](src/App.test.js): minimal smoke test only.
- [README.md](README.md): generic CRA README, not project-specific documentation.

## Repo Conventions

- Keep changes small and local; this is a simple single-page app with no routing and no server API layer.
- Follow the existing functional-component style and React hooks usage.
- Preserve the current library choices unless the task explicitly requires a migration.
- Treat [src/GlobalState.js](src/GlobalState.js) as the authoritative runtime data source unless you also wire in [data.json](data.json).

## Pitfalls

- [data.json](data.json) exists, but the current app code does not read from it.
- [README.md](README.md) is boilerplate and does not describe the actual product.
- [src/useController.js](src/useController.js) appears internally inconsistent: it declares `tradeData` but returns `importData`, and it calls `setImportData` without defining it. Check this file first when chart behavior is broken.
- [src/ChartComponent.js](src/ChartComponent.js) uses `props.id` to index `state.Countries`, while [src/ResultsComponent.js](src/ResultsComponent.js) builds that `id` from the selected-country render order. If selected countries are reordered or filtered, chart-to-country mapping can drift.
- State updates in [src/ParameterComponent.js](src/ParameterComponent.js) mix functional updates with replacement-style updates. Be careful not to accidentally drop unrelated state keys.

## Working Guidance For Agents

- When fixing chart output, start from [src/useController.js](src/useController.js) and [src/ChartComponent.js](src/ChartComponent.js).
- When fixing selection behavior, start from [src/ParameterComponent.js](src/ParameterComponent.js) and [src/GlobalState.js](src/GlobalState.js).
- Run a narrow check after edits: `npm test -- --watchAll=false` for smoke coverage, or `npm run build` for integration-level validation.
- Do not assume modern React or modern CRA defaults; this repo is on older package versions.

## Follow-up Customizations Worth Adding

- A frontend-focused instruction file for `src/**/*.js` that captures the expected state shape and chart data flow.
- A reusable prompt or skill for “trace chart data flow” so agents can quickly inspect country selection, trade aggregation, and chart rendering end to end.
