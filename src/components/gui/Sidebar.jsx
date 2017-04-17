import React  from 'react';
import './Sidebar.css';
import { List, ListItem } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import Media from 'material-ui/svg-icons/action/perm-media';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import classNames from 'classnames';

import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UtilsActions from '../../store/actions/UtilsActions';

const styles = {
    list        : {
        padding : 0
    },
    link        : {
        color          : 'rgba(0, 0, 0, 0.870588)',
        textDecoration : 'none',
        textTransform  : 'none',
        transition     : 'background-color .1s ease'
        
    },
    mdIcon      : {
        position      : 'absolute',
        top           : 10,
        right         : 22,
        width         : 24,
        height        : 24,
        color         : 'rgba(0, 0, 0, 0.54)',
        pointerEvents : 'none',
        transition    : 'transform .3s ease',
        
    },
    sidebarIcon : {
        display    : 'block',
        color      : 'rgba(0, 0, 0, 0.870588)',
        fill       : 'rgb(117, 117, 117)',
        height     : 24,
        width      : 24,
        userSelect : 'none',
        transition : 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
        position   : 'absolute',
        top        : 0,
        margin     : 12,
        right      : 4,
    },
    footerBtn   : {
        height : '100%'
    }
};

const Sidebar = ( props ) => {
    
    let sidebarClass = classNames ( {
        'main-sidebar' : true,
        'collapsed'    : props.sideNavCollapsed,
    } );
    return (
        <div className="Sidebar">
            <div className={sidebarClass}>
                
                <div className="sidenav-content">
                    <List className="md-list" style={styles.list}>
                        <div className="nav-group nav-group-root">
                            <ListItem >
                                <Link to="/" style={styles.link}>
                                    <div className="item-lookup">
                                        <ActionHome style={styles.mdIcon}/>
                                        <span className="entry-displayname">Overview</span>
                                    </div>
                                </Link>
                            </ListItem>
                        </div>
                        
                        <div className="nav-group nav-group-top">
                            <ListItem>
                                <Link to="/demos" style={styles.link}>
                                    <div className="item-lookup">
                                        <Media style={styles.mdIcon}/>
                                        <span className="entry-displayname">Presentation Demos</span>
                                    </div>
                                </Link>
                            </ListItem>
                        </div>
                    </List>
                </div>
                
                <div className="sidenav-footer">
                </div>
                
                <div className="nav-expand">
                    <FlatButton
                        style={styles.footerBtn}
                        fullWidth
                        icon={<ChevronLeft className={props.sideNavCollapsed ? 'rotated' : ''} style={styles.mdIcon}/>}
                        onClick={props.actions.expandMenu}
                    />
                </div>
            </div>
        </div>
    );
    
};

function mapStateToProps ( state ) {
    return {
        sideNavCollapsed : state.utils.sideNavCollapsed,
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions : bindActionCreators ( UtilsActions, dispatch )
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( Sidebar );