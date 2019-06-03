

import React, { useContext } from 'react';
import { ChartComponent } from './ChartComponent';
import {ParameterContext} from './GlobalState';
import useController from './useController';


 const ResultsComponent =()=>
{
    const {selectedCountries, tradeType} = useController();
    const [state,setState] = useContext(ParameterContext);
    return (
        <div className="Header">
        <h1> Hello from ResultsComponent</h1>
            {selectedCountries.Map((country, tradeType)=>
                    <ChartComponent country tradeType />
                
                )        
            }
        </div>

    );
}


export default ResultsComponent;
