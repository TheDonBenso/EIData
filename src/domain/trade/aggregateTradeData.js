const MONTH_ORDER = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const MONTH_SHORT = {
  January: 'Jan',
  February: 'Feb',
  March: 'Mar',
  April: 'Apr',
  May: 'May',
  June: 'Jun',
  July: 'Jul',
  August: 'Aug',
  September: 'Sep',
  October: 'Oct',
  November: 'Nov',
  December: 'Dec',
};

const VALID_TRADE_TYPES = ['import', 'export', 'both'];
const VALID_PERIODS = ['monthly', 'yearly'];

const sumYear = (yearData) => {
  if (!yearData) {
    return 0;
  }

  return Object.values(yearData).reduce(
    (runningTotal, currentValue) => runningTotal + (Number(currentValue) || 0),
    0
  );
};

const getSortedYears = (country) => {
  const years = new Set([
    ...Object.keys(country?.Import || {}),
    ...Object.keys(country?.Export || {}),
  ]);

  return Array.from(years).sort((leftYear, rightYear) =>
    Number(leftYear) - Number(rightYear)
  );
};

const aggregateYearly = (country, tradeType, years) => {
  return years.map((year) => {
    const row = { bucket: year };

    if (tradeType === 'import' || tradeType === 'both') {
      row.import = sumYear(country?.Import?.[year]);
    }

    if (tradeType === 'export' || tradeType === 'both') {
      row.export = sumYear(country?.Export?.[year]);
    }

    return row;
  });
};

const aggregateMonthly = (country, tradeType, years) => {
  return years.flatMap((year) => {
    const importYear = country?.Import?.[year] || {};
    const exportYear = country?.Export?.[year] || {};

    return MONTH_ORDER.map((month) => {
      const row = {
        bucket: `${year}-${MONTH_SHORT[month]}`,
        year,
        month,
      };

      if (tradeType === 'import' || tradeType === 'both') {
        row.import = Number(importYear[month]) || 0;
      }

      if (tradeType === 'export' || tradeType === 'both') {
        row.export = Number(exportYear[month]) || 0;
      }

      return row;
    });
  });
};

const aggregateTradeData = (country, tradeType, period) => {
  if (!country || !VALID_TRADE_TYPES.includes(tradeType) || !VALID_PERIODS.includes(period)) {
    return [];
  }

  const years = getSortedYears(country);

  if (period === 'yearly') {
    return aggregateYearly(country, tradeType, years);
  }

  return aggregateMonthly(country, tradeType, years);
};

export default aggregateTradeData;
