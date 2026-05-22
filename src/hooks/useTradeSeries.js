import { useMemo } from 'react';
import aggregateTradeByYear from '../domain/trade/aggregateTradeByYear';

const useTradeSeries = (country, tradeType) => {
  const tradeSeries = useMemo(() => {
    if (!country || !tradeType) {
      return [];
    }

    if (tradeType === 'import') {
      return aggregateTradeByYear(country.Import, 'import');
    }

    if (tradeType === 'export') {
      return aggregateTradeByYear(country.Export, 'export');
    }

    return [];
  }, [country, tradeType]);

  return { tradeSeries };
};

export default useTradeSeries;