import React from 'react';
import { render, screen } from '@testing-library/react';
import { ParameterContext } from '../../context/TradeContext';
import ResultsComponent from './ResultsComponent';

vi.mock('../charts/ChartComponent', () => ({
  ChartComponent: ({ name, chartData }) => (
    <div data-testid={`chart-${name}`}>
      {name}:{chartData.length}
    </div>
  ),
}));

describe('ResultsComponent', () => {
  it('renders selected country charts with precomputed series', () => {
    const state = {
      Countries: [
        {
          Country: 'Uganda',
          Import: {
            2024: { January: 5, February: 5 },
          },
          Export: {
            2024: { January: 1, February: 2 },
          },
        },
      ],
      selectedCountries: ['Uganda'],
      tradeType: 'import',
    };

    render(
      <ParameterContext.Provider value={[state, vi.fn()]}>
        <ResultsComponent />
      </ParameterContext.Provider>
    );

    expect(screen.getByTestId('chart-Uganda')).toHaveTextContent('Uganda:1');
  });
});