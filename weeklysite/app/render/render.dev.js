import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import createHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Route, Link, Prompt} from 'react-router-dom'

import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux';
import DevTools from './devtool';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from '../reducers';

const history = createHistory();
const middleware = routerMiddleware(history);
const enhancer = compose(applyMiddleware(thunkMiddleware,middleware), DevTools.instrument())

const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer
}), enhancer)


const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
    <Provider store={store}>
        <div>
        <Component/>
        <DevTools/>
        </div>
    </Provider>
  </AppContainer>, document.getElementById('app'))
}

export default render;