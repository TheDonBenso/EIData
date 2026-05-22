import React from 'react';
import {GlobalStateProvider} from '../../context/TradeContext';

const AppProviders = ({ children }) => {
  return <GlobalStateProvider>{children}</GlobalStateProvider>;
};

export default AppProviders;