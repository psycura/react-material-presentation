import { combineReducers } from 'redux'
import slides from './slides'
import utils from './utils'
import presentations from './presentations'


export const rootReducer = combineReducers ( {
    slides,
    utils,
    presentations
} );