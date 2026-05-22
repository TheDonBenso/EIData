import React, { useEffect } from 'react';
import useTradeFilters from '../../hooks/useTradeFilters';

 const ParameterComponent =( )=>{

    const { selectedCountries, setSelectedCountries, setTradeType } = useTradeFilters();
    useEffect(
        ()=> {
        return()=>{console.log("parameter context unmounting...")}       
        },[selectedCountries]

    );
    const AddCountry = (e)=>
    {  
        if(e.target.checked){
            setSelectedCountries((currentSelectedCountries) => [
                ...currentSelectedCountries,
                e.target.value,
            ]);
       
              
        } else {
            const remove = selectedCountries.indexOf(e.target.value);
            setSelectedCountries((currentSelectedCountries) =>
                currentSelectedCountries.filter((_, i) => i !== remove)
            );
     }
    };
  
    const setTrade = (e)=>
    {
        setTradeType(e.target.value);
    };
  
    const getCharts = (e) => {
        e.preventDefault();
        console.log("fetch chart data");

    };
    
    return (
        <div>
            <h1>Hello from ParameterComponent</h1>
            <form onSubmit={getCharts}>
                                <input type="checkbox" name="Uganda" value="Uganda" onChange={AddCountry} /> Uganda
                                <input type="checkbox" name="Egypt" value="Egypt" onChange={AddCountry}/> Egypt 
                                <input type="checkbox" name="Tanzania" value="Tanzania" onChange={AddCountry} /> Tanzania
                                <input type="checkbox" name="Zimbabwe" value="Zimbabwe" onChange={AddCountry}/> Zimbabwe 
              <br />
                <label>
                Select Trade Type:
                                        <select defaultValue="both" onChange={setTrade}>
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
