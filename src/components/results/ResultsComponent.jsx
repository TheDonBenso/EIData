

import React from 'react';
import { ChartComponent } from '../charts/ChartComponent';
import useTradeFilters from '../../hooks/useTradeFilters';
import aggregateTradeByYear from '../../domain/trade/aggregateTradeByYear';


 const ResultsComponent =()=>
{
    const {Countries, selectedCountries, tradeType} = useTradeFilters();
    return (
        <div className="Header">

            {selectedCountries.map((countryName) => {
                    const country = Countries.find(({ Country }) => Country === countryName);
                    const tradeSource = country
                        ? tradeType === 'import'
                            ? country.Import
                            : tradeType === 'export'
                                ? country.Export
                                : null
                        : null;
                    const chartData = aggregateTradeByYear(tradeSource, tradeType);

                    return <ChartComponent key={countryName} chartData={chartData} name={countryName} />;
                })}
        </div>

    );
}


export default ResultsComponent;
