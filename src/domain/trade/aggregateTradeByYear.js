const aggregateTradeByYear = (tradeDataByYear, tradeType) => {
  if (!tradeDataByYear || (tradeType !== 'import' && tradeType !== 'export')) {
    return [];
  }

  const yearKeys = Object.keys(tradeDataByYear);

  return Object.values(tradeDataByYear).map((yearData, index) => {
    const total = Object.values(yearData).reduce(
      (runningTotal, currentValue) => runningTotal + currentValue,
      0
    );

    return {
      year: yearKeys[index],
      [tradeType]: total,
    };
  });
};

export default aggregateTradeByYear;