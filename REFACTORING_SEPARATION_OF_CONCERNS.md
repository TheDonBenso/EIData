# Refactoring Plan: Separation of Concerns

## Objective

This plan restructures the codebase so each layer has one responsibility:

- Presentation: React UI components only
- State and domain: context, hooks, and business logic
- Data: source dataset and data mapping
- Styling: CSS colocated by feature or component

The immediate goal is to make the app easier to test, scale, and change without regressions.

## Current pain points in this project

1. Source files are mostly flat in src, so responsibilities are mixed.
2. GlobalState contains provider logic and a large embedded dataset in one file.
3. useController mixes state access with transformation logic and naming that does not clearly express intent.
4. UI components are not grouped in a Component directory.
5. Chart data shaping logic is embedded in UI flow instead of isolated domain functions.

## Target directory structure

Use this as the end-state structure.

    src/
      app/
        App.jsx
        providers/
          AppProviders.jsx
      components/
        controls/
          ParameterComponent.jsx
          ParameterComponent.css
        charts/
          ChartComponent.jsx
          ChartComponent.css
        results/
          ResultsComponent.jsx
      context/
        TradeContext.jsx
      hooks/
        useTradeFilters.js
        useTradeSeries.js
      domain/
        trade/
          aggregateTradeByYear.js
          selectors.js
          constants.js
      data/
        countriesTradeData.js
      styles/
        index.css

Notes:
- The user example is covered: ParameterComponent is moved into a Component directory.
- The current GlobalState should be split into context plus data.

## Refactoring principles

1. Components render only; no aggregation logic in component bodies.
2. Hooks coordinate data flow for UI concerns.
3. Domain functions are pure and framework-agnostic.
4. Context should expose stable state and actions only.
5. Data source should be isolated from provider wiring.
6. Keep each step small and shippable.

## Step-by-step implementation plan

## Step 1: Create folders and move UI files

Actions:
1. Create component folders under src/components.
2. Move ParameterComponent, ChartComponent, ResultsComponent into their folders.
3. Update all imports after move.
4. Keep behavior unchanged.

Definition of done:
- App compiles after file moves.
- No logic changes yet.

## Step 2: Extract app-level provider shell

Actions:
1. Create src/app/providers/AppProviders.jsx.
2. Move provider composition from App into AppProviders.
3. Make App focus on page layout only.

Definition of done:
- App contains only structural UI.
- Provider composition lives in one place.

## Step 3: Split GlobalState into context and data

Actions:
1. Create src/context/TradeContext.jsx for context and reducer or state actions.
2. Move embedded dataset into src/data/countriesTradeData.js.
3. Import data into context initializer.

Definition of done:
- Context file only handles state wiring.
- Data file only contains static dataset exports.

## Step 4: Introduce domain aggregation utilities

Actions:
1. Create src/domain/trade/aggregateTradeByYear.js.
2. Move year aggregation from useController into this pure function.
3. Add export and import modes as explicit parameters.

Definition of done:
- Aggregation logic is testable without React.
- Hooks and components call domain utility instead of inlining logic.

## Step 5: Refactor hooks by concern

Actions:
1. Replace broad useController with focused hooks:
   - useTradeFilters for selected countries and trade type
   - useTradeSeries for chart-ready data derivation
2. Keep hook outputs explicit and typed by shape conventions.

Definition of done:
- Hooks have narrow purposes and clear naming.
- No ambiguous return names like importData that may contain export series.

## Step 6: Make chart components presentational

Actions:
1. Pass prepared chart data as props into ChartComponent.
2. Remove internal data retrieval side effects from ChartComponent.
3. Keep ChartComponent responsible only for rendering chart UI.

Definition of done:
- ChartComponent does not access context directly.
- Chart rendering is deterministic from props.

## Step 7: Separate styles by scope

Actions:
1. Move component-specific styles beside components.
2. Keep global styles in src/styles.
3. Remove obsolete CSS imports from unrelated files.

Definition of done:
- Style ownership is obvious.
- No cross-feature style coupling.

## Step 8: Add safeguards with tests

Actions:
1. Unit test domain aggregation in src/domain/trade.
2. Add component smoke tests for key render paths.
3. Add hook tests for filter and series derivation.

Definition of done:
- Behavior is verified around country selection and trade mode switches.
- Refactor confidence improves for future changes.

## Step 9: Optional feature modularization

If this app grows, introduce feature-first modules:

    src/features/trade/
      components/
      hooks/
      domain/
      context/

This keeps all trade concerns together and avoids horizontal sprawl.

## Incremental execution checklist

Use this checklist to execute safely:

1. Move files only, then run build.
2. Extract provider shell, then run build.
3. Split context and data, then run build.
4. Extract pure domain functions, then run build and tests.
5. Refactor hooks and chart props, then run build and tests.
6. Clean styles and dead code, then run build.

## Risk controls

1. Avoid large multi-file logic rewrites in one commit.
2. Keep one concern per commit.
3. Add tests before changing aggregation behavior.
4. Maintain backward-compatible prop contracts until all call sites are updated.

## Suggested commit plan

1. chore: move UI components into component directories
2. refactor: split app providers from App layout
3. refactor: split trade context and static data source
4. refactor: extract trade aggregation domain utilities
5. refactor: replace useController with focused hooks
6. refactor: make ChartComponent presentational
7. chore: reorganize styles and remove dead code
8. test: add domain and hook coverage for trade flows

## Expected outcome

After this refactor:

- UI components are easier to reason about.
- Business logic is centralized and reusable.
- Data source changes no longer require provider rewrites.
- New features can be added with less coupling and lower regression risk.
