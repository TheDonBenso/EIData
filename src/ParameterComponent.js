import React, { useState, useContext } from 'react';
import {ParameterContext} from './GlobalState';

 const ParameterComponent =( )=>{

    const [data,setData] = useContext(ParameterContext);
    const [countries,setCountries] = useContext(ParameterContext);
    const [country, setCountry] = useState(ParameterComponent);
   
    const addUganda = (e)=>
    {
        setCountry( e.target.value);
        setCountries(prevCountries => [...prevCountries, {country : country}]);
       console.log(countries);
    };
    const addSouthAfrica = (e)=>
    {
        setCountry( e.target.value);
    };
    const addZimbabwe = (e)=>
    {
        setCountry( e.target.value);
    };
    const addEgypt = (e)=>
    {
        setCountry( e.target.value);
    };
    const addAll = (e)=>
    {
        setCountry( e.target.value);
    };
    const addTanzania = (e)=>
    {
        setCountry( e.target.value);
    };
    const getCharts = (e) => {
        e.preventDefault();
        console.log("");

    };
    
    return (
        <div>
            <h1>Hello from ParameterComponent</h1>
            <form onSubmit={getCharts}>
                <input type="checkbox" name="All" value="All" checked onChange={addAll}/> All 
                <input type="checkbox" name="Uganda" value="Uganda" onChange={addUganda} /> Uganda
                <input type="checkbox" name="Egypt" value="Egypt" onChange={addEgypt}/> Egypt 
                <input type="checkbox" name="Tanzania" value="Tanzania" onChange={addTanzania} /> Tanzania
                <input type="checkbox" name="Zimbabwe" value="Zimbabwe" onChange={addZimbabwe}/> Zimbabwe 
              
                <label>
                Select Trade Type:
                    <select defaultValue="export">
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


export default ParameterComponent;
