import { renderHook } from '@testing-library/react';
import useTradeSeries from './useTradeSeries';

describe('useTradeSeries', () => {
  const country = {
    Import: {
      2024: { January: 2, February: 3 },
    },
    Export: {
      2024: { January: 4, February: 6 },
    },
  };

  it('returns import series when trade type is import', () => {
    const { result } = renderHook(() => useTradeSeries(country, 'import'));

    expect(result.current.tradeSeries).toEqual([{ year: '2024', import: 5 }]);
  });

  it('returns export series when trade type is export', () => {
    const { result } = renderHook(() => useTradeSeries(country, 'export'));

    expect(result.current.tradeSeries).toEqual([{ year: '2024', export: 10 }]);
  });

  it('returns empty series for missing country or unsupported type', () => {
    const missingCountry = renderHook(() => useTradeSeries(null, 'import'));
    const unsupportedType = renderHook(() => useTradeSeries(country, 'both'));

    expect(missingCountry.result.current.tradeSeries).toEqual([]);
    expect(unsupportedType.result.current.tradeSeries).toEqual([]);
  });
});