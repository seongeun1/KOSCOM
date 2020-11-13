import React, {useEffect,useState, } from 'react';
import './App.css';
import { ExchangeRateContextProvider } from './contexts/ExchangeRateContext';
import {BrowserRouter} from 'react-router-dom';
import RootRouter from './Routers/RootRouter';
function App() {

  return(
    <ExchangeRateContextProvider>   
      <BrowserRouter>
        
        <RootRouter />
      </BrowserRouter>
    </ExchangeRateContextProvider>
  );

}



export default App;
