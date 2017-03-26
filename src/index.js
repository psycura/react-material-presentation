import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { routes } from './routes'
import configureStore from './store/configureStore'


import { Provider } from 'react-redux';

const store = configureStore();

import './index.css';

ReactDOM.render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>,
    document.getElementById ( 'root' )
);
