import React, { useState } from 'react';
import countriesTradeData from '../data/countriesTradeData';

const ParameterContext = React.createContext([{}, () => {}]);

const initialTradeState = {
  Countries: countriesTradeData,
  selectedCountries: [],
  tradeType: '',
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
