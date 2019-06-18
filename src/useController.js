import {useContext, useState} from 'react';
import {ParameterContext} from './GlobalState';

const useController = () =>
{
    const [state] = useContext(ParameterContext);
    const [importData, setImportData] = useState([]);
    const [exportData] = useState([]);

   function getData(_country, _data, _tradeType)
    {      
            Object.values(_data).map((_year, _index) => {
                var usekey =  Object.keys(_data);            
                var totals = Object.values(_year).reduce((total, curvalue)=> total+=curvalue);
                return setImportData(prevImportData => [...prevImportData, { year:  usekey[_index], type: _tradeType, total: totals}]);
            });
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