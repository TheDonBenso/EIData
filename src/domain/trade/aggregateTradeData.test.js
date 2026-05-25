import aggregateTradeData from './aggregateTradeData';

const sampleCountry = {
  Country: 'Uganda',
  Import: {
    2023: { January: 10, February: 20 },
    2024: { January: 5, February: 7 },
  },
  Export: {
    2023: { January: 3, February: 4 },
    2024: { January: 6, February: 8 },
  },
};

describe('aggregateTradeData', () => {
  it('returns empty array for invalid inputs', () => {
    expect(aggregateTradeData(null, 'import', 'yearly')).toEqual([]);
    expect(aggregateTradeData(sampleCountry, 'other', 'yearly')).toEqual([]);
    expect(aggregateTradeData(sampleCountry, 'import', 'weekly')).toEqual([]);
  });

  it('aggregates yearly import/export/both', () => {
    expect(aggregateTradeData(sampleCountry, 'import', 'yearly')).toEqual([
      { bucket: '2023', import: 30 },
      { bucket: '2024', import: 12 },
    ]);

    expect(aggregateTradeData(sampleCountry, 'export', 'yearly')).toEqual([
      { bucket: '2023', export: 7 },
      { bucket: '2024', export: 14 },
    ]);

    expect(aggregateTradeData(sampleCountry, 'both', 'yearly')).toEqual([
      { bucket: '2023', import: 30, export: 7 },
      { bucket: '2024', import: 12, export: 14 },
    ]);
  });

  it('aggregates monthly import/export/both with stable month ordering', () => {
    const monthlyImport = aggregateTradeData(sampleCountry, 'import', 'monthly');
    const monthlyExport = aggregateTradeData(sampleCountry, 'export', 'monthly');
    const monthlyBoth = aggregateTradeData(sampleCountry, 'both', 'monthly');

    expect(monthlyImport[0]).toEqual({
      bucket: '2023-Jan',
      year: '2023',
      month: 'January',
      import: 10,
    });
    expect(monthlyImport[1]).toEqual({
      bucket: '2023-Feb',
      year: '2023',
      month: 'February',
      import: 20,
    });

    expect(monthlyExport[0]).toEqual({
      bucket: '2023-Jan',
      year: '2023',
      month: 'January',
      export: 3,
    });

    expect(monthlyBoth[0]).toEqual({
      bucket: '2023-Jan',
      year: '2023',
      month: 'January',
      import: 10,
      export: 3,
    });
  });
});