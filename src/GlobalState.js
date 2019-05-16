import React,{useState, createContext} from 'react';

export const ParameterContext = createContext();

export const GlobalStateProvider = props =>{

    const [countries, setCountries] = useState([]);

    const [tradeType, setTradeType] = useState([]);

    return (
        <ParameterContext.Provider>
            {props.children}
        </ParameterContext.Provider>
    );
};
