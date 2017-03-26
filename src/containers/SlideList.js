import React, { Component } from "react";
import { browserHistory } from 'react-router'

import { TimelineMax, TweenMax } from "gsap";

import Slide from "../components/Slide";

import { List, ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";


import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SlideActions from "../actions/SlideActions";


let tl = new TimelineMax ();
let cardHeight, cardWidth;

let styles = {
    list     : {
        width     : '25vw',
        boxShadow : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px'
    },
    listItem : {},
    slide    : {
        opacity : 0
    }
};

class SlideList extends Component {
    constructor ( props ) {
        super ( props );
        this.state = { loadSlide : false }
    }
    
    componentDidMount () {
        this.listExpand ();
        this.props.actions.resetToFirst ();
    }
    
    renderSlides = ( slide, index ) => {
        return (
            <ListItem style={styles.listItem}
                      className="list-item"
                      key={index}
                      leftAvatar={
                          <Avatar backgroundColor={slide.secondaryColor}/>
                      }
                      primaryText={slide.title}
                      secondaryText={slide.content}
                      secondaryTextLines={2}>
            </ListItem>
        )
    };
    
    render () {
        const { slides } = this.props;
        
        return (
            <div className="slideList" onClick={this.firstSlideExpand}>
                <List style={styles.list}
                      className="list">
                    {
                        slides.map ( this.renderSlides )
                    }
                </List>
                {
                    this.state.loadSlide
                    &&
                    <div style={styles.minimize}
                         className="cardMinimized">
                        <Slide slide={slides[ 0 ]}
                               slideNumber={1}
                               opening
                        />
                    </div>
                }
            </div>
        );
    }
    
    listExpand = () => {
        tl.from ( '.list', .375, { rotationX : 90 } )
        .to ( '.list', .1, { y : -8 }, '-=.375' )
        .to ( '.list-item', .175, {
            marginBottom : 40,
            boxShadow    : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
        } )
        .set ( '.list', {
                boxShadow  : 'none',
                onComplete : this.getDimensions
            }, '-=.1'
        );
    };
    
    getDimensions = () => {
        cardHeight      = document.querySelector ( '.list-item' ).getBoundingClientRect ().height;
        cardWidth       = document.querySelector ( '.list-item' ).getBoundingClientRect ().width;
        styles.minimize = {
            width     : cardWidth,
            height    : cardHeight,
            position  : 'absolute',
            overflow  : 'hidden',
            left      : 0,
            top       : 0,
            transform : 'none',
            opacity   : 0
        };
        this.setState ( {
            loadSlide : true
        } );
    };
    
    firstSlideExpand = () => {
        
        const list = document.querySelector ( '.list' );
        const card = document.querySelector ( '.cardMinimized' );
        console.log ( card );
        
        TweenMax.to ( list, .375, {
            opacity : 0
        } );
        tl.to ( card, .375, {
            bezier : {
                type   : 'soft',
                values : [
                    { width : '30%', height : '40%' },
                    { width : '60%', height : '80%' },
                    { width : '100%', height : '100%' } ]
            }
        } )
        .to ( '.button', .375, {
            top       : 'auto',
            boxShadow : 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
            bezier    : {
                type   : 'soft',
                values : [
                    { right : '80%', bottom : '-0', width : 60, height : 60 },
                    { right : '60%', bottom : '-5', width : 80, height : 80 },
                    { right : '5%', bottom : '-50', width : 100, height : 100 } ]
            },
            width     : 100,
            height    : 100,
        }, '-=.375' )
        .to ( '.card-header', .375, {
            backgroundColor : this.props.slides[ 0 ].mainColor,
            onComplete      : () => {
                browserHistory.push ( '/slides' );
            }
        }, '-=.3' )
        .to ( card, 0.5, {
            opacity : 1,
        }, '-=2' );
    };
}

function mapStateToProps ( state ) {
    return {
        slides : state.slides.slides
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions : bindActionCreators ( SlideActions, dispatch )
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( SlideList );


