

import React from 'react';
import { ChartComponent } from '../charts/ChartComponent';
import useTradeFilters from '../../hooks/useTradeFilters';
import aggregateTradeData from '../../domain/trade/aggregateTradeData';


 const ResultsComponent =()=>
{
    const {Countries, appliedFilters} = useTradeFilters();

    return (
        <div className="Header">

            {appliedFilters.selectedCountries.map((countryName) => {
                    const country = Countries.find(({ Country }) => Country === countryName);
                    const chartData = aggregateTradeData(
                        country,
                        appliedFilters.tradeType,
                        appliedFilters.period
                    );

                    return <ChartComponent key={countryName} chartData={chartData} name={countryName} />;
                })}
        </div>

    );
}


export default ResultsComponent;
