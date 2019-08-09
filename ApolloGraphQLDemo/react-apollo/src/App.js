import React, { Fragment } from 'react';
import PokemonByName from './PokemonByName';

import './App.css';

const App = () => (
  <Fragment>
    <PokemonByName name={'pikachu'} />
    <PokemonByName name={'charmander'} />
    <PokemonByName name={'bulbasaur'} />
  </Fragment>
)

export default App;