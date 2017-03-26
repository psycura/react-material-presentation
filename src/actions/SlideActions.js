import { NEXT_SLIDE, RESET_TO_FIRST } from '../constants/ActionTypes'

export const nextSlide = ( nextSlideNumber ) => {
    return {
        type : NEXT_SLIDE,
        nextSlideNumber
    }
};

export const resetToFirst = () => {
    return {
        type : RESET_TO_FIRST
    }
};

