import React, { useState } from 'react';
import { renderHook, act } from '@testing-library/react';
import { ParameterContext } from '../context/TradeContext';
import useTradeFilters from './useTradeFilters';

const initialState = {
  Countries: [{ Country: 'Uganda' }],
  selectedCountries: [],
  tradeType: '',
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
  it('updates trade type and preserves other state', () => {
    const { result } = renderHook(() => useTradeFilters(), { wrapper });

    act(() => {
      result.current.setTradeType('import');
    });

    expect(result.current.tradeType).toBe('import');
    expect(result.current.Countries).toEqual([{ Country: 'Uganda' }]);
  });

  it('updates selected countries using updater function', () => {
    const { result } = renderHook(() => useTradeFilters(), { wrapper });

    act(() => {
      result.current.setSelectedCountries((currentSelectedCountries) => [
        ...currentSelectedCountries,
        'Uganda',
      ]);
    });

    expect(result.current.selectedCountries).toEqual(['Uganda']);
  });
});