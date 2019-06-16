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
    const [importData, setImportData] = useState([
     
    ]);
    const [exportData, setExportData] = useState([
      {
        year : "",
        total : 0
      }
    ]);

    useEffect(()=>{
            // (the first one, and every one after that)
         //   console.log('render! Country: '+ props.name +' id : '+ props.id +' type: '+ tradeType);
            setCountry(state.Countries[props.id]);

           var mykeys =Object.keys(country);

           if((tradeType !== null) && (tradeType === "import"))
           {
                var imports = country[mykeys[3]];
                
                Object.values(imports).map((_year, _index, _importkeys) => {
                  var usekey =  Object.keys(imports);
                  var totals = Object.values(_year).reduce((total, curvalue)=> total+=curvalue);
                  return setImportData(prevImportData => [...prevImportData, { year:  usekey[_index], total: totals}]);
                  
                });
                
           }
           if((tradeType !== null) && (tradeType === "export"))
           {
            var exports = country[mykeys[2]];
            setExportData(exports);
        //    console.log(exports);
           }
           if((tradeType !== null) && (tradeType === "both"))
           {
          //  var imports = country[mykeys[3]];
            //var exports = country[mykeys[2]];

         
           }

            // If you want to implement componentWillUnmount,
            // return a function from here, and React will call
            // it prior to unmounting.
            return () => console.log('chart component unmounting...');
      }, [props.id, importData,tradeType, state.Countries, country]//props.name,  tradeKeys,, exportData]
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
                    data={importData}
                    margin={{
                    top: 5, right: 5, left: 5, bottom: 5,
                    }}
                >
                            
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year"/>
                <YAxis dataKey="total"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            

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



