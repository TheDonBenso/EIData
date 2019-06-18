

import React from 'react';
import { ChartComponent } from './ChartComponent';
import useController from './useController';


 const ResultsComponent =()=>
{
    const {selectedCountries, tradeType} = useController();
    return (
        <div className="Header">

            {selectedCountries.map((country, id)=>
                    //var c =  getCountry(country);

                    <ChartComponent key={id} id={id} name ={country} trade={tradeType} />
                
                )        
            }
        </div>

    );
}


export default ResultsComponent;
