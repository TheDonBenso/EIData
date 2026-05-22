import React from 'react';
import './css/App.css';
import {GlobalStateProvider} from './GlobalState';
import ParameterComponent from './ParameterComponent';
import ResultsComponent from './ResultsComponent';

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
