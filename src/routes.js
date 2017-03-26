import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App';
import SlideList from './containers/SlideList';
import SlideView from './containers/SlideView'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={SlideList}/>
            <Route path='/slides' component={SlideView}/>
        </Route>
    </div>
);