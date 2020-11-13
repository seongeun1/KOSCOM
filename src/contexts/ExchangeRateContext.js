import React, {createContext, useState, useEffect, useCallback } from 'react';
import CurrencyDetail from '../Routers/CurrencyDetail';

const authkey='OEIDkG6msYquVZXRoO4v24mfhCwNPzZ9';


const ExchangeRateContextValue={
    data: [],
    date: '2020-11-13',
    setDate:()=>{},
    getCurrencyDetail:()=>{},
}

export const ExchangeRateContext=createContext(ExchangeRateContextValue);


export function ExchangeRateContextProvider(props){
    const[data, setData]=useState([]);
    const[data, setData]=useState('2020-11-13');


    useEffect(()=>{ 
        fetch(
          
          `https://www.koreaexim.go.kr/site/program/financial/exchangeJSON?authkey=${authkey}&searchdate=${'20180102'}&data=${'AP01'}`
        ).then(response=>{
            return response.json()
          }
        ).then(
          responseJSON=>{
            console.log('responseJSON', responseJSON);
            setData(responseJSON);
          });
     
      }, [data]);

      const getCurrencyDetailByUnit=useCallback(code=>{
        const matchedCurrency = data.filter(currency=>{
          return currency.cur_uit === code;
        })

        if(!matchedCurrency.length){
          return false;
        }
        return matchedCurrency[0];
      },[])

      return (
        <ExchangeRateContext.Provider 
            value={{
                data,
                data,
                setData,  }          
            }>
        {props.children}
        </ExchangeRateContext.Provider>
      

      );

}

export default ExchangeRateContext;