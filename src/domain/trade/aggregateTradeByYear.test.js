import aggregateTradeByYear from './aggregateTradeByYear';

describe('aggregateTradeByYear', () => {
  it('returns empty array for invalid inputs', () => {
    expect(aggregateTradeByYear(null, 'import')).toEqual([]);
    expect(aggregateTradeByYear(undefined, 'export')).toEqual([]);
    expect(aggregateTradeByYear({}, 'both')).toEqual([]);
  });

  it('aggregates yearly totals for import mode', () => {
    const yearlyData = {
      2023: { January: 10, February: 15 },
      2024: { January: 5, February: 20 },
    };

    expect(aggregateTradeByYear(yearlyData, 'import')).toEqual([
      { year: '2023', import: 25 },
      { year: '2024', import: 25 },
    ]);
  });

  it('aggregates yearly totals for export mode', () => {
    const yearlyData = {
      2022: { January: 8, February: 2, March: 10 },
    };

    expect(aggregateTradeByYear(yearlyData, 'export')).toEqual([
      { year: '2022', export: 20 },
    ]);
  });
});