import React, { useState } from 'react';
import { renderHook, act } from '@testing-library/react';
import { ParameterContext } from '../context/TradeContext';
import useTradeFilters from './useTradeFilters';

const initialState = {
  Countries: [{ Country: 'Uganda' }],
  filterDraft: {
    selectedCountries: [],
    tradeType: 'both',
    period: 'yearly',
  },
  appliedFilters: {
    selectedCountries: [],
    tradeType: 'both',
    period: 'yearly',
  },
  selectedCountries: [],
  tradeType: 'both',
  period: 'yearly',
};

const wrapper = ({ children }) => {
  const [state, setState] = useState(initialState);
  return (
    <ParameterContext.Provider value={[state, setState]}>
      {children}
    </ParameterContext.Provider>
  );
};

describe('useTradeFilters', () => {
  it('updates draft filters without mutating applied filters', () => {
    const { result } = renderHook(() => useTradeFilters(), { wrapper });

    act(() => {
      result.current.setDraftTradeType('import');
      result.current.setDraftPeriod('monthly');
      result.current.setDraftSelectedCountries((currentSelectedCountries) => [
        ...currentSelectedCountries,
        'Uganda',
      ]);
    });

    expect(result.current.filterDraft).toEqual({
      selectedCountries: ['Uganda'],
      tradeType: 'import',
      period: 'monthly',
    });
    expect(result.current.appliedFilters).toEqual({
      selectedCountries: [],
      tradeType: 'both',
      period: 'yearly',
    });
    expect(result.current.Countries).toEqual([{ Country: 'Uganda' }]);
  });

  it('applies draft filters on submit action', () => {
    const { result } = renderHook(() => useTradeFilters(), { wrapper });

    act(() => {
      result.current.setDraftSelectedCountries((currentSelectedCountries) => [
        ...currentSelectedCountries,
        'Uganda',
      ]);
      result.current.setDraftTradeType('export');
      result.current.setDraftPeriod('monthly');
      result.current.applyDraftFilters();
    });

    expect(result.current.appliedFilters).toEqual({
      selectedCountries: ['Uganda'],
      tradeType: 'export',
      period: 'monthly',
    });
  });
});