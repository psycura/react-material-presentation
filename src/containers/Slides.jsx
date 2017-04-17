import React, { Component } from "react";
// import { browserHistory } from 'react-router'
import DynamicSlide  from '../components/DynamicSlide'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as PresentationsActions from '../store/actions/PresentationsActions';

import * as animations from '../animations/index';
import * as _ from 'lodash'
import './Slides.css'

class SlideList extends Component {
    constructor ( props ) {
        super ( props );
        this.state = {
            loading       : false,
            slides        : null,
            presentations : [],
            url           : ''
        }
    }
    
    async moveToNextSlide () {
        await this.animateOut ( this.state.slides[ this.props.slideIndex ] );
        if ( this.props.nextSlideIndex === 0 ) {
            // this.$router.replace ( this.url )
        } else {
            await this.props.actions.nextSlide ( this.props.nextSlideIndex );
            this.animateIn ( this.state.slides[ this.props.slideIndex ] );
        }
        
    }
    
    animateOut ( slide ) {
        return new Promise ( ( resolve ) => {
            const { leaveEffects } = slide;
            if ( leaveEffects ) {
                this.animationChain ( leaveEffects )
                .then ( () => {
                    resolve ();
                } );
            }
        } )
        
    }
    
    animateIn ( slide ) {
        if ( slide.transformFromPrevious ) return;
        const { enterEffects } = slide;
        if ( enterEffects ) {
            this.animationChain ( enterEffects );
        }
    }
    
    animationChain ( effects ) {
        return new Promise ( ( resolve ) => {
            _.forIn ( effects, ( value, key ) => {
                let { type } = value;
                animations[ type ] ( value )
                .then ( () => {
                    resolve ();
                } );
            } )
        } )
        
    }
    
    async setInitialState () {
        await this.setState ( {
            slides  : null,
            loading : true
        } );
        
        await this.props.actions.initState ();
        
        // if ( ~this.$route.path.indexOf ( 'demos' ) ) {
        //     this.url = '/demos';
        // } else if ( ~this.$route.path.indexOf ( 'collection' ) ) {
        //     this.url = '/collection';
        // }
        
        await this.setState ( {
            slides  : this.props.currentSlides,
            loading : false
        } );
        
    }
    
    async componentWillMount () {
        await this.setInitialState ();
        if ( this.props.slideIndex === 0 ) {
            this.animateIn ( this.state.slides[ this.props.slideIndex ] )
        }
    }
    
    render () {
        const { slides }                     = this.state;
        const { slideIndex, nextSlideIndex } = this.props;
        
        return (
            <div className="wrapper">
                <div className="SlideBg">
                    {
                        this.state.loading
                        &&
                        <div className="loading">
                            Loading...
                        </div>
                    }
                    
                    {
                        slides
                        &&
                        <div onClick={this.moveToNextSlide.bind ( this )} className="slide-wrapper">
                            {
                                slideIndex > 0
                                &&
                                <div className="prev">
                                    <DynamicSlide key={slides[ slideIndex - 1 ].id}
                                                  id={slides[ slideIndex - 1 ].id}
                                                  slide={slides[ slideIndex - 1 ]}>
                                    </DynamicSlide>
                                </div>
                            }
                            
                            <div className="current">
                                <DynamicSlide key={slides[ slideIndex ].id}
                                              id={slides[ slideIndex ].id}
                                              slide={slides[ slideIndex ]}>
                                </DynamicSlide>
                            </div>
                            <div className="next">
                                <DynamicSlide key={slides[ nextSlideIndex ].id}
                                              id={slides[ nextSlideIndex ].id}
                                              slide={slides[ nextSlideIndex ]}>
                                </DynamicSlide>
                            </div>
                        </div>
                    }
                
                </div>
            </div>
        );
    }
    
}

function mapStateToProps ( state ) {
    return {
        slideIndex     : state.presentations.slideIndex,
        nextSlideIndex : state.presentations.nextSlideIndex,
        currentSlides  : state.presentations.currentSlides
    }
}

function mapDispatchToProps ( dispatch ) {
    return {
        actions : bindActionCreators ( PresentationsActions, dispatch )
    }
}

export default connect ( mapStateToProps, mapDispatchToProps ) ( SlideList );


