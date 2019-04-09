import React, { Component } from 'react';
import Select from 'react-select';


const tradeType = [
    { label: "Export Data", value: 1 },
    { label: "Import Data", value: 2 },
    { label: "Both Data", value: 3 },
  ];


class ParameterComponent extends Component
{
    render(){

        return (
            <div>
                <div className="Header">
                    <h1>Dashboard</h1>
                </div>
                <div>
                   <Select options={tradeType} />
                </div>
            </div>
        );
    
    };

}


export default ParameterComponent;
