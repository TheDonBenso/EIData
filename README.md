# East Africa Trade Explorer

A React frontend for exploring East African trade totals by country and trade type.

## Stack

- React 19
- Vite 8
- Recharts 3

## Scripts

- `npm run dev`: start local development server
- `npm run build`: create production build in `dist/`
- `npm run preview`: preview the production build locally
- `npm test`: run tests (requires Vitest setup)

## Project structure

- `src/App.jsx`: app shell
- `src/GlobalState.jsx`: global context and source dataset
- `src/ParameterComponent.jsx`: selection UI for countries and trade type
- `src/ResultsComponent.jsx`: renders chart components for selected countries
- `src/ChartComponent.jsx`: Recharts bar chart view
- `src/useController.js`: data-shaping hook used by chart rendering

## Data source

Runtime data is currently embedded in `src/GlobalState.jsx`.

## Quick start

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Build for production:
   - `npm run build`
