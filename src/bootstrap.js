import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './components/home';
import reducers from './reducers';

import thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import history from './history';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Home>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/home" component={Home}></Route>
          </Switch>
        </Home>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
