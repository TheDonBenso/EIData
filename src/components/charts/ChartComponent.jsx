import React from 'react';
import './ChartComponent.css';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
 

export const ChartComponent = (props) =>
{
    const chartData = props.chartData || [];
    const hasImportSeries = chartData.some((row) => row.import != null);
    const hasExportSeries = chartData.some((row) => row.export != null);

        return (
            <div className="chart-box">
                
               <div className="title">
                    Country : {props.name} 
               </div>
               <div className="chart-area">
               <BarChart
                    width={600}
                    height={300}
                    data={chartData}
                    margin={{ top: 5, right: 5, left: 1, bottom: 5}}  >
                            
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bucket"/>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {hasImportSeries ? <Bar dataKey="import" fill="#8884d8" /> : null}
                    {hasExportSeries ? <Bar dataKey="export" fill="#1384d8" /> : null}
            

                </BarChart>

               </div>
            </div>

        );
    
    };

