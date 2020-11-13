import React, {useEffect, useContext } from 'react';

import {ExchangeRateContext, } from '../contexts/ExchangeRateContext';
function CurrencyDetail(props){
    
    const exchangeRateContext=useContext(ExchangeRateContext);

    useEffect(()=>{
        console.log('props.matach.params.currencyCode', props.match.params.currencyCode);
        const currencyDetail=exchangeRateContext.getCurrencyDetail(props.match.params.currency);
        console.log('currencyDetail: ', currencyDetail);
    }, [
        exchangeRateContext.getCurrencyDetail,
        props.match.params.currencyCode
    ]);

    return(
        <div>

        </div>
    )
}

export default CurrencyDetail;
