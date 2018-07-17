import React, {Component} from 'react';
import Login from './components/Login';
import Category from './components/Category'
import Product from './components/Product'
import './App.css';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/category" component={Category}/>
                    <Route path="/product" component={Product}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
