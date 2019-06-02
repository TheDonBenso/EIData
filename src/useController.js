import {useContext} from 'react';
import {ParameterContext} from './GlobalState';

const useController = () =>
{
    const [state, setState] = useContext(ParameterContext);
    const[country, setCountry] = useState({});

    function getCountry(countryName){
        var _countrydata = state.Countries.indexOf(countryName);
        setCountry[state.Countries.filter((_, i) => i === _countrydata)];
    }

    return {
        selectedCountries : state.selectedCountries,
        getCountry, 
        tradeType,
        country
    }


}


export default useController;