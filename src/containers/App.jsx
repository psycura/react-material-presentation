import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin ();

const App = ( props ) => {
    return (
        <MuiThemeProvider>
            <div className="App">
                <div className="SlideBg">
                    {props.children}
                </div>
            </div>
        </MuiThemeProvider>
    );
};

export default App;
