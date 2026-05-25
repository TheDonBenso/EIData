import { useContext } from 'react';
import { ParameterContext } from '../context/TradeContext';

const useTradeFilters = () => {
  const [state, setState] = useContext(ParameterContext);
  const filterDraft = state.filterDraft || {
    selectedCountries: state.selectedCountries || [],
    tradeType: state.tradeType || 'both',
    period: state.period || 'yearly',
  };
  const appliedFilters = state.appliedFilters || {
    selectedCountries: state.selectedCountries || [],
    tradeType: state.tradeType || 'both',
    period: state.period || 'yearly',
  };

  const setDraftSelectedCountries = (updater) => {
    setState((currentState) => {
      const currentDraft = currentState.filterDraft || filterDraft;
      const nextSelectedCountries =
        typeof updater === 'function'
          ? updater(currentDraft.selectedCountries)
          : updater;

      return {
        ...currentState,
        filterDraft: {
          ...currentDraft,
          selectedCountries: nextSelectedCountries,
        },
      };
    });
  };

  const setDraftTradeType = (tradeType) => {
    setState((currentState) => ({
      ...currentState,
      filterDraft: {
        ...(currentState.filterDraft || filterDraft),
        tradeType,
      },
    }));
  };

  const setDraftPeriod = (period) => {
    setState((currentState) => ({
      ...currentState,
      filterDraft: {
        ...(currentState.filterDraft || filterDraft),
        period,
      },
    }));
  };

  const applyDraftFilters = () => {
    setState((currentState) => {
      const nextAppliedFilters = currentState.filterDraft || filterDraft;

      return {
        ...currentState,
        appliedFilters: nextAppliedFilters,
        // Keep legacy top-level fields synchronized during migration.
        selectedCountries: nextAppliedFilters.selectedCountries,
        tradeType: nextAppliedFilters.tradeType,
        period: nextAppliedFilters.period,
      };
    });
  };

  const setSelectedCountries = (updater) => {
    setState((currentState) => {
      const nextSelectedCountries =
        typeof updater === 'function'
          ? updater(currentState.selectedCountries)
          : updater;

      return {
        ...currentState,
        selectedCountries: nextSelectedCountries,
        filterDraft: {
          ...(currentState.filterDraft || filterDraft),
          selectedCountries: nextSelectedCountries,
        },
        appliedFilters: {
          ...(currentState.appliedFilters || appliedFilters),
          selectedCountries: nextSelectedCountries,
        },
      };
    });
  };

  const setTradeType = (tradeType) => {
    setState((currentState) => ({
      ...currentState,
      tradeType,
      filterDraft: {
        ...(currentState.filterDraft || filterDraft),
        tradeType,
      },
      appliedFilters: {
        ...(currentState.appliedFilters || appliedFilters),
        tradeType,
      },
    }));
  };

  return {
    Countries: state.Countries,
    filterDraft,
    appliedFilters,
    selectedCountries: state.selectedCountries,
    tradeType: state.tradeType,
    period: state.period,
    setDraftSelectedCountries,
    setDraftTradeType,
    setDraftPeriod,
    applyDraftFilters,
    setSelectedCountries,
    setTradeType,
  };
};

export default useTradeFilters;