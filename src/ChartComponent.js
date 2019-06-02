import React, { useContext } from 'react';
import {ParameterContext} from './GlobalState';
import './css/chart.css';


export const ChartComponent = (props) =>
{

    const [state,setState] = useContext(ParameterContext);
   
        return (
            <div className="chart-box">
                
               <div className="title">
                    Country : props.name
               </div>
               <div className="chart-area"></div>
               <div className="myradio">
                   <input type="radio" name="line" value="line" id={1}/>     line             
                   <input type="radio" name="bar" value="bar" id={2}/> bar
                   <input type="radio" name="area" value="area" id={3}/> area

               </div>
            </div>

        );
    
    };



