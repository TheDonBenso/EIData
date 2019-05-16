import React, { Component, useContext } from 'react';
import {ParameterContext} from './GlobalState';
import './css/chart.css';

export const ChartComponent = props =>
{

    const myvalue = useContext(ParameterContext);
   
        return (
            <div className="chart-box">
               <div className="title">
                    Country : ___
               </div>
               <div className="chart-area"></div>
            </div>

        );
    
    };



