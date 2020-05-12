import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/details';
import Detail from '../pages/addres';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/detail" component={Detail}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;