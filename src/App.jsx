import React from 'react';
import './app/App.css';
import AppProviders from './app/providers/AppProviders';
import ParameterComponent from './components/controls/ParameterComponent';
import ResultsComponent from './components/results/ResultsComponent';

 function App()  {
 
  

     return (
      <AppProviders>
        <div className="App">
            <ParameterComponent />
            <ResultsComponent />
        </div>
      </AppProviders>
    );
 
   
  
}

export default App;
