import React from 'react';
import './ChartComponent.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
 

export const ChartComponent = (props) =>
{
        return (
            <div className="chart-box">
                
               <div className="title">
                    Country : {props.name} 
               </div>
               <div className="chart-area">
               <BarChart
                    width={600}
                    height={300}
                    data={props.chartData}
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

