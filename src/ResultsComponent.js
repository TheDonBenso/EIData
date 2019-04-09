import React, { Component } from 'react';
import { ChartComponent } from './ChartComponent';

 class ResultsComponent extends Component
{
    render(){

        return (
            <div className="Header">
            <h1> Hello from ResultsComponent</h1>
                <ChartComponent/>
                <ChartComponent/>
                <ChartComponent/>
                <ChartComponent/>
                <ChartComponent/>
                
            </div>

        );
    
    };

}


export default ResultsComponent;
