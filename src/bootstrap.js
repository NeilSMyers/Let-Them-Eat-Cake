import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar';
import reducers from './reducers';

import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';

import AboutUs from './components/aboutUs';
import Customization from './components/customization';
import Gallery from './components/gallery';
import Home from './components/home';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <NavBar>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home}/>

            <Route path="/about-us" component={AboutUs}/>
            <Route path="/gallery" component={Gallery}/>
            <Route path="/customization" component={Customization}/>
          </Switch>
        </NavBar>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
