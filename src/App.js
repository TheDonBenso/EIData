import React, { Component } from 'react';
import './css/App.css';
import ParameterComponent from './ParameterComponent.js';
import ResultsComponent from  './ResultsComponent.js';

 class App extends Component {
  render() {
    return (
      <div className="App">
          <ParameterComponent />
          <ResultsComponent />
      </div>
    );
  }
}

export default App;
