import React from 'react'
import { Route } from 'react-router'

import App from './containers/App';
import Slides from './containers/Slides';
import SlideView from './containers/SlideView'
import PresentationDemos from './containers/PresentationDemos'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <Route path='/demos' component={PresentationDemos}/>
            <Route path='/slides' component={SlideView}/>
            <Route path='/demos/:index' component={Slides}/>
        </Route>
    </div>
);