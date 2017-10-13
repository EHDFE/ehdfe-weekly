import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom'

import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer
}), applyMiddleware(thunkMiddleware,middleware))

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
    <Component/>
  </Provider>, document.getElementById('app'))
}

export default render;