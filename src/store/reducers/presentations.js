import {
    SET_CURRENT_SLIDES,
    INIT_STATE,
    SET_PRESENTATIONS_DEMOS,
    SET_CURRENT_PRESENTATION,
    UPDATE_PRESENTATION_NAME,
    ADD_EMPTY_SLIDE,
    NEXT_SLIDE
} from '../../constants/ActionTypes';

import * as _ from 'lodash';

const initialState = {
    slideIndex          : 0,
    nextSlideIndex      : 1,
    presentationDemos   : [],
    currentSlides       : [],
    currentPresentation : {}
};

export default function presentationsReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case NEXT_SLIDE:
            const length = state.currentSlides.length;
            
            return {
                ...state,
                nextSlideIndex : (action.nextSlideIndex + 1) >= length ? 0 : action.nextSlideIndex + 1,
                slideIndex     : action.nextSlideIndex > length - 1 ? 0 : action.nextSlideIndex
            };
        
        case SET_PRESENTATIONS_DEMOS:
            return {
                ...state,
                presentationDemos : action.demos
            };
        
        case INIT_STATE:
            
            return {
                ...state,
                slideIndex     : 0,
                nextSlideIndex : 1
            };
        
        case SET_CURRENT_SLIDES:
            let array = [];
            _.forIn ( action.slides, ( value, key ) => {
                array.push ( value )
            } );
            
            return {
                ...state,
                currentSlides : array,
            };
        
        case SET_CURRENT_PRESENTATION:
            let slidesArray  = [];
            let presentation = action.presentation;
            _.forIn ( action.presentation.slides, ( value, key ) => {
                slidesArray.push ( value )
            } );
            presentation.slides = slidesArray;
            
            return {
                ...state,
                currentPresentation : presentation,
            };
        
        case UPDATE_PRESENTATION_NAME:
            
            return {
                ...state,
                currentPresentation : {
                    name : action.name
                }
            };
        
        case ADD_EMPTY_SLIDE:
            
            let slideArray = state.currentPresentation.slides;
            let slide      = {
                layout : action.layout,
                id     : slideArray.length + 1
            };
            
            slideArray.push ( slide );
            
            return {
                ...state,
                currentPresentation : {
                    slides : slideArray
                }
            };
        
        default:
            return state
    }
}
