import React, { Component } from 'react';
import { browserHistory } from 'react-router'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as PresentationsActions from '../store/actions/PresentationsActions';

import AppBar from 'material-ui/AppBar';
import { Card, CardActions, CardHeader, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { pink500 } from 'material-ui/styles/colors';

import DynamicSlide from '../components/DynamicSlide'

import  './PresentationDemos.css'

const styles = {
    slidePreview  : {
        maxHeight : 288
    },
    mdCardContent : {
        overflow : 'hidden',
        height   : 156
    }
};

class PresentationDemos extends Component {
    
    async navigateTo  ( index )  {
        await this.props.actions.setCurrentSlides ( this.props.presentationDemos[ index ].slides );
        browserHistory.push ( `/demos/${index}` )
    };
    
    renderPresentationsDemos = ( demo, index ) => {
        return (
            <div className="grid-cell" key={index}>
                <Card className="slide-preview" style={styles.slidePreview} key={index}>
                    <CardHeader
                        className="md-title"
                        title={demo.name}
                    />
                    <CardMedia style={styles.mdCardContent}>
                        <DynamicSlide slide={demo.slides[ 0 ]}/>
                    </CardMedia>
                    
                    <CardActions>
                        <FlatButton label="Preview" onClick={this.navigateTo.bind ( this, index )}/>
                        <FlatButton label="Add To Collection"/>
                    </CardActions>
                </Card>
            </div>
        )
    };
    
    render () {
        
        const styles = {
            appBar : {
                backgroundColor : pink500,
                zIndex          : 12
            }
        };
        
        const presentationDemos = this.props.presentationDemos;
        
        return (
            <div className="presentation-demos">
                <AppBar
                    zDepth={2}
                    title="Presentation Demos"
                    showMenuIconButton={false}
                    style={styles.appBar}
                />
                <div className="demos-grid">
                    {
                        presentationDemos.map ( this.renderPresentationsDemos )
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps ( state ) {
    return {
        presentationDemos : state.presentations.presentationDemos
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions : bindActionCreators ( PresentationsActions, dispatch )
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( PresentationDemos );
