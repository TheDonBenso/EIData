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
            Object.values(_data).map((_year, _index) => {
                var usekey =  Object.keys(_data);            
                var totals = Object.values(_year).reduce((total, curvalue)=> total+=curvalue);
                return setImportData(prevTradeData => [...prevTradeData, { year:  usekey[_index], import: totals}]);
            });
        }
        
        if(_tradeType === "export")
        {
             Object.values(_data).map((_year, _index) => {
                var usekey =  Object.keys(_data);            
                var totals = Object.values(_year).reduce((total, curvalue)=> total+=curvalue);
                return setImportData(prevTradeData => [...prevTradeData, { year:  usekey[_index], export: totals}]);
            });
        }
    }

    return {
        selectedCountries : state.selectedCountries,
        tradeType : state.tradeType,
        Countries: state.Countries,
        importData,
        exportData, 
        getData
    }


}


export default useController;
