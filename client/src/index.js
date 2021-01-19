import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import './index.css';

// provider keep track of store which is that global state and that allows us to access that from anywhere

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);