import {useContext, useState} from 'react';
import {ParameterContext} from './GlobalState';

const useController = () =>
{
    const [state] = useContext(ParameterContext);
    const [tradeData, setTradeData] = useState([]);
    const [exportData] = useState([]);

   function getData(_country, _data, _tradeType)
    {     
        
        if(_tradeType === "import"){
            const usekey = Object.keys(_data);
            setTradeData(
                Object.values(_data).map((_year, _index) => {
                    const totals = Object.values(_year).reduce((total, curvalue) => total + curvalue, 0);
                    return { year: usekey[_index], import: totals };
                })
            );
        }
        
        if(_tradeType === "export")
        {
            const usekey = Object.keys(_data);
            setTradeData(
                Object.values(_data).map((_year, _index) => {
                    const totals = Object.values(_year).reduce((total, curvalue) => total + curvalue, 0);
                    return { year: usekey[_index], export: totals };
                })
            );
        }
    }

    return {
        selectedCountries : state.selectedCountries,
        tradeType : state.tradeType,
        Countries: state.Countries,
        importData: tradeData,
        exportData, 
        getData
    }


}


export default useController;
