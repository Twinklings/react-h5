import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/details';
import Order from '../pages/order';
import Addres from '../pages/addres';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/order" component={Order}/>
            <Route exact path="/addres" component={Addres}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;