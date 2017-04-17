import { NEXT_SLIDE, RESET_TO_FIRST } from '../../constants/ActionTypes';
import slides from '../../data/slides';

const initialState = {
    slides          : slides,
    slideNumber     : 1,
    nextSlideNumber : 2
};

export default function slideReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case NEXT_SLIDE:
            let nextSlideNumber = 0;
            action.nextSlideNumber > 5 ? nextSlideNumber = 1 : nextSlideNumber = action.nextSlideNumber;
            return {
                ...state,
                slideNumber     : nextSlideNumber,
                nextSlideNumber : (nextSlideNumber + 1) > state.slides.length ? 1 : nextSlideNumber + 1
            };
        
        case RESET_TO_FIRST:
            return {
                ...state,
                slideNumber     : 1,
                nextSlideNumber : 2
            };
        
        default:
            return state
    }
}