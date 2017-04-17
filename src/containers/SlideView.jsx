import React  from "react";
import { browserHistory } from 'react-router'

import { Elastic, Expo, Power3, TimelineMax, TweenMax } from "gsap";

import Slide from "../components/Slide";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as SlideActions from "../store/actions/SlideActions";

let tl = new TimelineMax ();

const SlideView = ( props ) => {
    
    const { slides, slideNumber, nextSlideNumber } = props;
    
    const slideIndex     = slideNumber - 1;
    const nextSlideIndex = nextSlideNumber - 1;
    
    const slideIn = () => {
        const button = document.querySelector ( '.current .button' );
        const card   = document.querySelector ( '.current' );
        
        tl.set ( card, {
            position  : 'absolute',
            overflow  : 'hidden',
            top       : '110%',
            height    : '100%',
            width     : '100%',
            transform : 'none',
        } )
        .set ( button, {
            bottom : '-250%',
            zIndex : 10
        } )
        .to ( card, 1, {
            top      : 0,
            ease     : Power3.easeOut,
            overflow : 'inherit'
        } )
        .to ( button, 1, {
            ease       : Elastic.easeOut.config ( 1, 0.3 ),
            bottom     : '-50',
        }, '-=.2' )
    };
    
    const slideOut = () => {
        const button = document.querySelector ( '.current .button' );
        const card   = document.querySelector ( '.current' );
        
        TweenMax.to ( button, 1, {
            ease : Expo.easeOut,
            y    : '-400'
        } );
        
        TweenMax.to ( card, 1.45, {
            ease       : Expo.easeOut,
            y          : '-200%',
            delay      : .5,
            onComplete : () => {
                if ( props.nextSlideNumber === 1 ) {
                    browserHistory.push ( '/' )
                } else {
                    props.actions.nextSlide ( props.slideNumber + 1 );
                    slideIn ()
                }
                
            }
        } )
    };
    
    const nextSlide = () => {
        slideOut ();
    };
    
    let styles = {
        prev    : {
            display : 'none'
        },
        current : {},
        next    : {
            position  : 'absolute',
            overflow  : 'hidden',
            top       : '110%',
            height    : '100%',
            width     : '100%',
            transform : 'none',
        }
    };
    
    return (
        <div className="SlideView" onClick={nextSlide}>
            {
                slideIndex > 0
                &&
                <div style={styles.prev} className="prev">
                    <Slide slide={slides[ slideIndex - 1 ]}
                           slideNumber={slideNumber - 1}
                           style={styles.prev}
                    />
                </div>
            }
            
            <div style={styles.current} className="current">
                <Slide slide={slides[ slideIndex ]}
                       slideNumber={slideNumber}
                       style={styles.current}
                />
            </div>
            
            <div style={styles.next} className="next">
                <Slide slide={slides[ nextSlideIndex ]}
                       slideNumber={nextSlideNumber}
                />
            </div>
        
        </div>
    );
    
};

function mapStateToProps ( state ) {
    return {
        slides          : state.slides.slides,
        slideNumber     : state.slides.slideNumber,
        nextSlideNumber : state.slides.nextSlideNumber
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions : bindActionCreators ( SlideActions, dispatch )
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( SlideView );