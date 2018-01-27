import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './Components/App';
import combineReducers from './Reducers';

const store = createStore(combineReducers, {}, applyMiddleware());

ReactDOM.render(
    <Provider store={store}><App/></Provider>,
    document.getElementById('root')
);