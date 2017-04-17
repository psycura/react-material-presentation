import { EXPAND_MENU, SET_MESSAGE } from '../../constants/ActionTypes';

export const expandMenu = () => {
    return {
        type : EXPAND_MENU
    }
};

export const setMessage = ( message ) => {
    return {
        type : SET_MESSAGE,
        message
    }
};