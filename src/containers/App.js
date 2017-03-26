import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


class App extends Component {
    render() {
        return (
          <MuiThemeProvider>
              <div className="App">
                  <div className="SlideBg">
                      {this.props.children}
                  </div>
              </div>
          </MuiThemeProvider>
        );
    }
}

export default App;
