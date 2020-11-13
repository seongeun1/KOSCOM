import React, {useContext, useEffect, } from 'react';
import {ExchangeRateContext, } from '../contexts/ExchangeRateContext';
import { ExchangeRateContextProvider } from '../contexts/ExchangeRateContext';

const authkey='OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';
const ExchangeRateContextValue ={
    data : []
}

function Main(props){
    const exchangeRateContext=useContext(ExchangeRateContext);
    
    useEffect(()=>{
        console.log('exchangeRateContext.data',exchangeRateContext.data);
    
    }, [exchangeRateContext.data]);
    
    return (
        <div>
          <input 
          type={'date'}
          value={exchangeRateContext.date}
          onChange={event=>exchangeRateContext.setDate()}
          
          />
          <div>
            개발중
          made by seongeunPark
          </div>
            {exchangeRateContext.data.map((currency, cI)=>{
            return(
              <div key={cI}>
                {currency.cur_nm} -({currency.cur_unit}): {currency.bkpr}
              </div>
            );
          })}
        </div>
      );

}
export default Main;