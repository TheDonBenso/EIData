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
    const [importData, setImportData] = useState([]);
    const [exportData, setExportData] = useState([]);

    useEffect(()=>{
            // (the first one, and every one after that)
            console.log('render! Country: '+ props.name +' id : '+ props.id +' type: '+ tradeType);
            setCountry(state.Countries[props.id]);
            console.log(country);
           // setTradeKeys(Object.keys(state.Countries[props.id].tradeType));
           // console.log(tradeKeys);

           var mykeys =Object.keys(country);
          // console.log(mykeys);

           if((tradeType !== null) && (tradeType === "import"))
           {
                var imports = country[mykeys[3]];
               
                console.log(imports);
                
                Object.values(imports).map((year)=>{
                  var totals = Object.values(year).reduce((total, curvalue)=> total+=curvalue);
                  //setImportData((prev)=> ({...prev,totals}));
                  console.log(totals);
                });
                console.log(importData);
                
           }
           if((tradeType !== null) && (tradeType === "export"))
           {
            var exports = country[mykeys[2]];
            setExportData(exports);
            console.log(exports);
           }
           if((tradeType !== null) && (tradeType === "both"))
           {
            var imports = country[mykeys[3]];
            var exports = country[mykeys[2]];

            console.log(imports);
            console.log(exports);
           }

            // If you want to implement componentWillUnmount,
            // return a function from here, and React will call
            // it prior to unmounting.
            return () => console.log('unmounting...');
            }
    , [props.name, props.id, tradeType, state.Countries, country,tradeKeys, importData, exportData]
    );

    function sumTrade(tradedata) {

        let sum = 0;
        for (let volume of Object.values(tradedata)) {
          sum += volume;
        }
      
        return sum; // 650
      }


        return (
            <div className="chart-box">
                
               <div className="title">
                    Country : {props.name} 
               </div>
               <div className="chart-area">
               <BarChart
                    width={500}
                    height={300}
                    //data={importData}
                    margin={{
                    top: 5, right: 5, left: 5, bottom: 5,
                    }}
                >
                    
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Import"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Import" fill="#8884d8" />
        <Bar dataKey="Export" fill="#82ca9d" />
     

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



