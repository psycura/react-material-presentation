import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import FlatButton from 'material-ui/FlatButton';
import './Header.css'


class Login extends Component {
    static muiName = 'FlatButton';
    
    render() {
        return (
            <FlatButton {...this.props} label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help" />
        <MenuItem primaryText="Sign out" />
    </IconMenu>
);

Logged.muiName = 'IconMenu';

class Header extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            logged : true
        }
    }
    
    render () {
        return (
            <div className="Header">
                    <AppBar
                        zDepth={2}
                        title="Material Presentation"
                        iconElementRight={this.state.logged ? <Logged /> : <Login />}
                        showMenuIconButton={false}
                    />
            </div>
        );
    }
}

export default Header;


