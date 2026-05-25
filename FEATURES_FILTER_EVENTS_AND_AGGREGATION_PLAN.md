# Feature Plan: Submit-Driven Filters + Monthly/Yearly Aggregation

## Goal

Implement these additional features consistently across the app:

1. Aggregation must support `Monthly` and `Yearly` modes.
2. Filters in ParameterComponent must be tracked from:
   - country checkboxes
   - trade type dropdown (`import` / `export` / `both`)
   - period radio group (`monthly` / `yearly`)
3. Filter changes should be applied only on form submit.

## Current State Analysis

## Data model in countriesTradeData

The file [src/data/countriesTradeData.js](src/data/countriesTradeData.js) uses this nested structure:

- Country
- Trade type (`Import`, `Export`)
- Year (`2015`, `2016`, ...)
- Month (`January`, `February`, ...)
- Numeric value

Example shape:

```js
{
  Country: 'Uganda',
  Import: {
    2018: {
      January: 6943,
      February: 5546,
      ...
    }
  },
  Export: {
    2018: {
      January: 4749,
      ...
    }
  }
}
```

This structure supports both monthly and yearly aggregation naturally.

## Current gaps

1. `period` (monthly/yearly) is not stored in app state.
2. There is no radio group in [src/components/controls/ParameterComponent.jsx](src/components/controls/ParameterComponent.jsx) for monthly/yearly.
3. `tradeType='both'` is currently selectable but not handled by [src/components/results/ResultsComponent.jsx](src/components/results/ResultsComponent.jsx).
4. Filters are currently applied immediately via `onChange`; requirement says they must apply on submit.
5. Country checkboxes include countries not present in data (`Egypt`, `Zimbabwe`) which can produce empty charts.

## Target Behavior

1. User changes form fields freely (draft state only).
2. Clicking Submit applies all form values together.
3. Results update only after submit.
4. Aggregation logic follows submitted period and trade type:
   - `yearly + import`
   - `yearly + export`
   - `yearly + both`
   - `monthly + import`
   - `monthly + export`
   - `monthly + both`

## Recommended State Model

Split filter state into draft and submitted values.

Add to context state in [src/context/TradeContext.jsx](src/context/TradeContext.jsx):

```js
{
  Countries,
  filterDraft: {
    selectedCountries: [],
    tradeType: 'both',
    period: 'yearly',
  },
  appliedFilters: {
    selectedCountries: [],
    tradeType: 'both',
    period: 'yearly',
  }
}
```

Why this model:
- draft fields track checkbox/dropdown/radio changes
- applied filters change only on submit
- results subscribe only to `appliedFilters`

## Implementation Steps

## Step 1: Add filter actions in hook

Extend [src/hooks/useTradeFilters.js](src/hooks/useTradeFilters.js) with:

- `setDraftSelectedCountries(updater)`
- `setDraftTradeType(value)`
- `setDraftPeriod(value)`
- `applyDraftFilters()`

`applyDraftFilters` should copy `filterDraft` into `appliedFilters`.

## Step 2: Update ParameterComponent to draft-only edits

In [src/components/controls/ParameterComponent.jsx](src/components/controls/ParameterComponent.jsx):

1. Bind checkboxes to `filterDraft.selectedCountries`.
2. Bind dropdown to `filterDraft.tradeType`.
3. Add a radio group for `filterDraft.period`:
   - `yearly`
   - `monthly`
4. Keep `onChange` handlers for form controls, but only update draft fields.
5. In `onSubmit`, call `applyDraftFilters()` and prevent default form submit.

Important: control values should be controlled inputs (`checked` / `value`) so UI always matches draft state.

## Step 3: Replace hard-coded country list

In [src/components/controls/ParameterComponent.jsx](src/components/controls/ParameterComponent.jsx):

Generate checkbox options from `Countries` in state instead of hard-coded names.

This prevents invalid options (such as countries missing from dataset).

## Step 4: Add a unified trade aggregation utility

Create [src/domain/trade/aggregateTradeData.js](src/domain/trade/aggregateTradeData.js) to handle:

Inputs:
- `country`
- `tradeType` (`import` | `export` | `both`)
- `period` (`monthly` | `yearly`)

Outputs:
- `yearly`: one row per year
- `monthly`: one row per month with a year label (for example `2018-Jan`)
- `both`: include both `import` and `export` keys per row

## Step 5: Move ResultsComponent to applied filters

In [src/components/results/ResultsComponent.jsx](src/components/results/ResultsComponent.jsx):

1. Read `appliedFilters` instead of draft filters.
2. Resolve countries from `appliedFilters.selectedCountries`.
3. Call `aggregateTradeData(country, appliedFilters.tradeType, appliedFilters.period)`.
4. Pass `chartData` plus presentation metadata to chart component.

## Step 6: Keep ChartComponent presentational

[src/components/charts/ChartComponent.jsx](src/components/charts/ChartComponent.jsx) should remain render-only:

- receives precomputed `chartData`
- renders bars conditionally:
  - if data rows include `import`, render import bar
  - if data rows include `export`, render export bar

No context reads and no aggregation logic inside chart component.

## Step 7: Tests to add/update

1. Domain tests in [src/domain/trade/aggregateTradeByYear.test.js](src/domain/trade/aggregateTradeByYear.test.js) or new file for `aggregateTradeData`:
   - monthly import/export/both
   - yearly import/export/both
2. Hook tests in [src/hooks/useTradeFilters.test.jsx](src/hooks/useTradeFilters.test.jsx):
   - draft updates do not alter applied filters
   - submit copies draft to applied
3. Component tests in [src/components/results/ResultsComponent.test.jsx](src/components/results/ResultsComponent.test.jsx):
   - results use applied filters only
4. Control tests in [src/components/controls/ParameterComponent.jsx](src/components/controls/ParameterComponent.jsx) test file:
   - changing controls does not update results before submit
   - submit triggers updated results

## Proposed Data Contracts

## Filter contract

```js
filterDraft: {
  selectedCountries: string[],
  tradeType: 'import' | 'export' | 'both',
  period: 'monthly' | 'yearly'
}
```

```js
appliedFilters: {
  selectedCountries: string[],
  tradeType: 'import' | 'export' | 'both',
  period: 'monthly' | 'yearly'
}
```

## Aggregated row contract

```js
// yearly import/export/both
{ bucket: '2018', import?: number, export?: number }

// monthly import/export/both
{ bucket: '2018-Jan', import?: number, export?: number }
```

Use `bucket` as x-axis key to support both period types uniformly.

## Validation Rules

1. If no selected country: render empty state message, not empty chart skeletons.
2. If `tradeType='both'`: always provide both series keys.
3. If a country has missing month keys in a year: treat missing values as 0.
4. Ensure deterministic month order:
   - `Jan` to `Dec` (not object insertion assumptions)

## Suggested Delivery Order

1. Context and hook changes
2. Parameter form draft + submit behavior
3. Aggregation utility (`monthly` + `yearly` + `both`)
4. Results wiring to `appliedFilters`
5. Chart conditional bars
6. Tests

## Acceptance Criteria

1. Changing checkbox/dropdown/radio does not refresh chart immediately.
2. Clicking Submit applies all three control types together.
3. Monthly and yearly modes produce correct series shape.
4. Import/export/both all render correctly.
5. Build and tests pass:
   - `npm run build`
   - `npx vitest run`
