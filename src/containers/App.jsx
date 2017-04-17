import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

import classNames from 'classnames';

import Header from '../components/gui/Header';
import Sidebar from '../components/gui/Sidebar';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as PresentationsActions from '../store/actions/PresentationsActions';

import * as dbActions from '../dbActions/dbActions';
// import * as authActions from '../dbActions/authActions';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin ();

class App extends Component {
    constructor ( props ) {
        super ( props );
        this.state = { demosIsLoaded : false }
    }
    
    async componentWillMount () {
        await dbActions.getDemos ();
        this.setState ( {
            demoIsLoaded : true
        } )
        
    }
    
    render () {
        
        const pageContentClass = classNames ( {
            'page-content'      : true,
            'sidenav-collapsed' : this.props.sideNavCollapsed,
        } );
        
        return (
            <MuiThemeProvider>
                <div className="main-wrapper">
                    <Header/>
                    <div className="container">
                        <Sidebar/>
                        {
                            this.state.demoIsLoaded
                            &&
                            <div className={pageContentClass}>
                                {this.props.children}
                            </div>
                        }
                    
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
function mapStateToProps ( state ) {
    return {
        sideNavCollapsed : state.utils.sideNavCollapsed,
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions : bindActionCreators ( PresentationsActions, dispatch )
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( App );
