import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './ParameterComponent.js';
import './ResultsComponent.js'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
