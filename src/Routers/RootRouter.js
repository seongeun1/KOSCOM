import React from 'react';
import {Switch, Route,} from 'react-router-dom';

import Main from '../pages/Main'
import CurrencyDetail from "../Routers/CurrencyDetail"
function RootRouter(PROPS){
    return(
        <Switch>
            <Route path='/'>
                    <Main/>
            </Route>
            <Route 
            path='/currency/:currencycode'
            component={CurrencyDetail}
            />
                
            
        </Switch>
    );
}

export default RootRouter;