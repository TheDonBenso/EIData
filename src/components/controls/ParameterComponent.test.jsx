import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ParameterComponent from './ParameterComponent';

const hookState = {
  Countries: [
    { Key: 1, Country: 'Uganda' },
    { Key: 2, Country: 'Tanzania' },
  ],
  filterDraft: {
    selectedCountries: [],
    tradeType: 'both',
    period: 'yearly',
  },
  setDraftSelectedCountries: vi.fn(),
  setDraftTradeType: vi.fn(),
  setDraftPeriod: vi.fn(),
  applyDraftFilters: vi.fn(),
};

vi.mock('../../hooks/useTradeFilters', () => ({
  default: () => hookState,
}));

describe('ParameterComponent submit flow', () => {
  beforeEach(() => {
    hookState.filterDraft = {
      selectedCountries: [],
      tradeType: 'both',
      period: 'yearly',
    };
    hookState.setDraftSelectedCountries.mockClear();
    hookState.setDraftTradeType.mockClear();
    hookState.setDraftPeriod.mockClear();
    hookState.applyDraftFilters.mockClear();
  });

  it('tracks control edits and applies filters only on submit', () => {
    render(<ParameterComponent />);

    fireEvent.click(screen.getByLabelText(/Uganda/i));
    fireEvent.change(screen.getByDisplayValue('Both'), {
      target: { value: 'import' },
    });
    fireEvent.click(screen.getByLabelText(/Monthly/i));

    expect(hookState.setDraftSelectedCountries).toHaveBeenCalled();
    expect(hookState.setDraftTradeType).toHaveBeenCalledWith('import');
    expect(hookState.setDraftPeriod).toHaveBeenCalledWith('monthly');
    expect(hookState.applyDraftFilters).not.toHaveBeenCalled();

    fireEvent.click(screen.getByDisplayValue('Submit'));

    expect(hookState.applyDraftFilters).toHaveBeenCalledTimes(1);
  });
});