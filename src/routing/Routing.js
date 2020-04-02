import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

import ProductList from '../components/ProductList';
import Details from '../components/Details';
import Cart from '../components/Cart';
import Default from '../components/Default';
import About from '../components/About';

export default class Routing extends Component {
    render() {

        
        return (
            <Switch>
                <Route exact path="/" />
                <Route path="/products" component={ProductList} />
                <Route path="/details" component={Details} />
                <Route path="/about" component={About} />
                <Route path="/cart" component={Cart} />
                <Route component={Default} />
            </Switch>

            

        )
    }
}
