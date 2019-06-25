import React, { useContext,useState, useEffect } from 'react';
import {ParameterContext} from './GlobalState';
import './css/chart.css';
import useController from './useController';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
 

export const ChartComponent = (props) =>
{

    const [state] = useContext(ParameterContext);    
    const { tradeType, importData, getData} = useController();
    const [country,setCountry] = useState({});
   // const [tradeKeys, setTradeKeys] = useState({});
//    const [importData, setImportData] = useState([]);
  //  const [exportData, setExportData] = useState([]);

    useEffect(()=>{
            // (the first one, and every one after that)
         //   console.log('render! Country: '+ props.name +' id : '+ props.id +' type: '+ tradeType);
              
              setCountry(state.Countries[props.id]);
              if((tradeType !== null) && (tradeType === "import"))
              {

                  var imports = country["Import"];
                  getData(country, imports, "import" );
              }

              if((tradeType !== null) && (tradeType === "export"))
              {

                  var exports = country["Export"];
                  getData(country, exports, "export");
              }
            // If you want to implement componentWillUnmount,
            // return a function from here, and React will call
            // it prior to unmounting.
           // return () => console.log('chart component unmounting...');
      },[state.Countries, country, props.id, tradeType]//, importData, getData]
  );

  

        return (
            <div className="chart-box">
                
               <div className="title">
                    Country : {props.name} 
               </div>
               <div className="chart-area">
               <BarChart
                    width={600}
                    height={300}
                    data={importData}
                    margin={{ top: 5, right: 5, left: 1, bottom: 5}}  >
                            
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year"/>
                    <YAxis dataKey="import" domain={[20000, 100000]}/>
                    <YAxis dataKey="export" domain={[20000, 100000]}/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="import" fill="#8884d8" />
                    <Bar dataKey="export" fill="#1384d8" />
            

                </BarChart>

               </div>
              
             <>
             <label className="label">
                Select Period:
                    <select defaultValue="Annually">                      
                        <option value="Annually">Annually</option>
                        <option value="Monthly">Monthly</option>
                    </select>
                </label>
               <br />
             </>
            </div>

        );
    
    };



