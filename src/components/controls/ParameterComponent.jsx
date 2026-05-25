import React, { useEffect } from 'react';
import useTradeFilters from '../../hooks/useTradeFilters';

 const ParameterComponent =( )=>{

    const {
        Countries,
        filterDraft,
        setDraftSelectedCountries,
        setDraftTradeType,
        setDraftPeriod,
        applyDraftFilters,
    } = useTradeFilters();
    useEffect(
        ()=> {
        return()=>{console.log("parameter context unmounting...")}       
        },[filterDraft.selectedCountries]

    );
    const addCountry = (e)=>
    {  
        if(e.target.checked){
            setDraftSelectedCountries((currentSelectedCountries) => [
                ...currentSelectedCountries,
                e.target.value,
            ]);
       
              
        } else {
            const remove = filterDraft.selectedCountries.indexOf(e.target.value);
            setDraftSelectedCountries((currentSelectedCountries) =>
                currentSelectedCountries.filter((_, i) => i !== remove)
            );
     }
    };
  
    const setTrade = (e)=>
    {
        setDraftTradeType(e.target.value);
    };

    const setPeriod = (e) =>
    {
        setDraftPeriod(e.target.value);
    };
  
    const getCharts = (e) => {
        e.preventDefault();
        applyDraftFilters();
        console.log("fetch chart data");

    };
    
    return (
        <div>
            <h1>Select Country/Countries and Get Import/Export Charts</h1>
            <form onSubmit={getCharts}>
                {Countries.map((country) => (
                    <label key={country.Key}>
                        <input
                            type="checkbox"
                            name={country.Country}
                            value={country.Country}
                            checked={filterDraft.selectedCountries.includes(country.Country)}
                            onChange={addCountry}
                        />
                        {` ${country.Country} `}
                    </label>
                ))}
              <br />
                <label>
                Select Trade Type:
                                        <select value={filterDraft.tradeType} onChange={setTrade}>
                        <option value="export">Export</option>
                        <option value="import">Import</option>
                        <option value="both">Both</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="radio"
                        name="period"
                        value="yearly"
                        checked={filterDraft.period === 'yearly'}
                        onChange={setPeriod}
                    />
                    Yearly
                </label>
                <label>
                    <input
                        type="radio"
                        name="period"
                        value="monthly"
                        checked={filterDraft.period === 'monthly'}
                        onChange={setPeriod}
                    />
                    Monthly
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>            
        
    );
    
    

};


export default ParameterComponent;
