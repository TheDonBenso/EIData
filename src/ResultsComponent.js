

import React, { useContext } from 'react';
import { ChartComponent } from './ChartComponent';
import {ParameterContext} from './GlobalState';
import useController from './useController';


 const ResultsComponent =()=>
{
    const {selectedCountries,getCountry, tradeType} = useController();
    const [state,setState] = useContext(ParameterContext);
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
