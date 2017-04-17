import {
    SET_CURRENT_SLIDES,
    INIT_STATE,
    SET_PRESENTATIONS_DEMOS,
    SET_CURRENT_PRESENTATION,
    UPDATE_PRESENTATION_NAME,
    ADD_EMPTY_SLIDE,
    NEXT_SLIDE
} from '../../constants/ActionTypes';

export const nextSlide = (nextSlideIndex) => {
    return {
        type : NEXT_SLIDE,
        nextSlideIndex
    }
};

export const initState = () => {
    return {
        type : INIT_STATE
    }
};

export const setCurrentSlides = (slides) => {
    return {
        type : SET_CURRENT_SLIDES,
        slides
    }
};

export const setCurrentPresentation = (presentation) => {
    return {
        type : SET_CURRENT_PRESENTATION,
        presentation
    }
};


export const updatePresentationName = (name) => {
    return {
        type : UPDATE_PRESENTATION_NAME,
        name
    }
};

export const addEmptySlide = (layout) => {
    return {
        type : ADD_EMPTY_SLIDE,
        layout
    }
};

export const setPresentationsDemos = (demos) => {
    return {
        type : SET_PRESENTATIONS_DEMOS,
        demos
    }
};

