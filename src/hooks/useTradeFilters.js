import { useContext } from 'react';
import { ParameterContext } from '../context/TradeContext';

const useTradeFilters = () => {
  const [state, setState] = useContext(ParameterContext);

  const setSelectedCountries = (updater) => {
    setState((currentState) => {
      const nextSelectedCountries =
        typeof updater === 'function'
          ? updater(currentState.selectedCountries)
          : updater;

      return {
        ...currentState,
        selectedCountries: nextSelectedCountries,
      };
    });
  };

  const setTradeType = (tradeType) => {
    setState((currentState) => ({
      ...currentState,
      tradeType,
    }));
  };

  return {
    Countries: state.Countries,
    selectedCountries: state.selectedCountries,
    tradeType: state.tradeType,
    setSelectedCountries,
    setTradeType,
  };
};

export default useTradeFilters;