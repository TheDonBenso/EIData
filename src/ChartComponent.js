import React, { useContext,useState, useEffect } from 'react';
import {ParameterContext} from './GlobalState';
import './css/chart.css';
import useController from './useController';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
 

export const ChartComponent = (props) =>
{

    const [state,setState] = useContext(ParameterContext);    
    const {selectedCountries, getCountry, tradeType} = useController();
    const [country,setCountry] = useState({});
    const [tradeKeys, setTradeKeys] = useState({});

    useEffect(()=>{
            // (the first one, and every one after that)
            console.log('render! Country: '+ props.name +' id : '+ props.id +' type: '+ tradeType);
            setCountry(state.Countries[props.id]);
            console.log(country);
           // setTradeKeys(Object.keys(state.Countries[props.id].tradeType));
           // console.log(tradeKeys);

           var mykeys =Object.keys(country);
           console.log(mykeys);

           if((tradeType !== null) && (tradeType === "import"))
           {
                var imports = country[mykeys[3]];
                console.log(imports);
           }
           if((tradeType !== null) && (tradeType === "export"))
           {
            var exports = country[mykeys[2]];
            console.log(exports);
           }
           if((tradeType !== null) && (tradeType === "both"))
           {
            var imports = country[mykeys[3]];
            var exports = country[mykeys[2]];
           }

            // If you want to implement componentWillUnmount,
            // return a function from here, and React will call
            // it prior to unmounting.
            return () => console.log('unmounting...');
            }
    , [props.name, props.id, tradeType, state.Countries, country,tradeKeys]
    );


        return (
            <div className="chart-box">
                
               <div className="title">
                    Country : {props.name} 
               </div>
               <div className="chart-area">
               <BarChart
                    width={500}
                    height={300}
                   /* data={data} */
                    margin={{
                    top: 5, right: 5, left: 5, bottom: 5,
                    }}
                >
                    
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis />
        <YAxis />
        <Tooltip />
        <Legend />

                </BarChart>

               </div>
              
               <div className="myradio">
                   <input type="radio" name="line" value="line" id={1}/>     line             
                   <input type="radio" name="bar" value="bar" id={2}/> bar
                   <input type="radio" name="area" value="area" id={3}/> area

               </div>
            </div>

        );
    
    };



