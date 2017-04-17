import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers'
import createLogger from 'redux-logger'


export default function configureStore () {
    const store = compose (
        applyMiddleware (
            createLogger ())
    ) ( createStore ) ( rootReducer );
    
    /*if ( module.hot ) {
     // Enable Webpack hot module replacement for reducers
     module.hot.accept ( '../reducers', () => {
     const nextRootReducer = require ( '../reducers' ).rootReducer;
     store.replaceReducer ( nextRootReducer )
     } );
     }*/
    return store
}