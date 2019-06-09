import React, { useContext, useEffect } from 'react';
import {ParameterContext} from './GlobalState';

 const ParameterComponent =( )=>{

    const [state,setState] = useContext(ParameterContext);
    useEffect(
        ()=> {
        return()=>{console.log("parameter context unmounting...")}       
        },[state]

    );
    const AddCountry = (e)=>
    {  
        e.persist(); 
        if(e.target.checked){
            console.log(e.target.value);
            setState(state => ({...state, selectedCountries: [...state.selectedCountries, e.target.value]}));
           console.log(state);
              
        } else {
            let remove = state.selectedCountries.indexOf(e.target.value);
            setState({
                selectedCountries: state.selectedCountries.filter((_, i) => i !== remove)
            },
                () => { console.log('Countries', state.selectedCountries);  }
       );
     }
    };
  
    const setTrade = (e)=>
    {
        e.persist();
        console.log(e.target.value);
        setState(state => ({...state, tradeType:  e.target.value}));
        console.log(state);
    };
  
    const getCharts = (e) => {
        e.preventDefault();
        console.log("fetch chart data");

    };
    
    return (
        <div>
            <h1>Hello from ParameterComponent</h1>
            <form onSubmit={getCharts}>
                <input type="checkbox" name="Uganda" value="Uganda" onClick={AddCountry} /> Uganda
                <input type="checkbox" name="Egypt" value="Egypt" onClick={AddCountry}/> Egypt 
                <input type="checkbox" name="Tanzania" value="Tanzania" onClick={AddCountry} /> Tanzania
                <input type="checkbox" name="Zimbabwe" value="Zimbabwe" onClick={AddCountry}/> Zimbabwe 
              <br />
                <label>
                Select Trade Type:
                    <select defaultValue="both"  onClick={setTrade}>
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
