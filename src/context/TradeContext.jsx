import React, { useState } from 'react';
import countriesTradeData from '../data/countriesTradeData';

const ParameterContext = React.createContext([{}, () => {}]);

const initialFilters = {
  selectedCountries: [],
  tradeType: 'both',
  period: 'yearly',
};

const initialTradeState = {
  Countries: countriesTradeData,
  filterDraft: initialFilters,
  appliedFilters: initialFilters,
  // Backward-compatible aliases during migration.
  selectedCountries: initialFilters.selectedCountries,
  tradeType: initialFilters.tradeType,
  period: initialFilters.period,
};

const GlobalStateProvider = ({ children }) => {
  const [state, setState] = useState(initialTradeState);

  return (
    <ParameterContext.Provider value={[state, setState]}>
      {children}
    </ParameterContext.Provider>
  );
};

export { ParameterContext, GlobalStateProvider };
