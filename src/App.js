import React, { Component } from 'react';
import './css/App.css';
import {GlobalStateProvider} from './GlobalState';
import ParameterComponent from './ParameterComponent.js';
import ResultsComponent from  './ResultsComponent.js';

 function App()  {
 
  

     return (
      <GlobalStateProvider>
        <div className="App">
            <ParameterComponent />
            <ResultsComponent />
        </div>
      </GlobalStateProvider>
    );
 
   
  
}

export default App;
