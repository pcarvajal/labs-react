import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ProductList from '../pages/ProductList';
import Product from '../pages/Product';
import NotFound from '../pages/NotFound';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ProductList} ></Route>
            <Route exact path="/product/:sku" component={Product} ></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)

export default App;