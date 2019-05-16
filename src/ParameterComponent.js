import React, { Component } from 'react';



const tradeType = [
    { label: "Export Data", value: 1 },
    { label: "Import Data", value: 2 },
    { label: "Both Data", value: 3 },
  ];


class ParameterComponent extends Component
{
    constructor(props) {
        super(props);
        this.state = {value: 'export'};
    }

        
    render(){

        return (
            <div>
                <h1>Hello from ParameterComponent</h1>
                <form>
                    <input type="checkbox" name="All" value="All" checked/> All 
                    <input type="checkbox" name="Uganda" value="Uganda"/> Uganda 
                    <input type="checkbox" name="Egypt" value="Egypt"/> Egypt 
                    <input type="checkbox" name="Tanzania" value="Tanzania" /> Tanzania  <br />

                    <label>
                    Select Trade Type:
                    <select value={this.state.value}>
                        <option value="export">Export</option>
                        <option value="import">Import</option>
                        <option value="both">Both</option>
                    </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>            
           
        );
    
    };

}


export default ParameterComponent;
