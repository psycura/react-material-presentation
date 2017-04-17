import { EXPAND_MENU, SET_MESSAGE } from '../../constants/ActionTypes';



const initialState = {
    sideNavCollapsed : false,
    message          : '',
    messageIsVisible : false,
};

export default function utilsReducer ( state = initialState, action ) {
    switch ( action.type ) {
        case EXPAND_MENU:
            let currentState=state.sideNavCollapsed;
            return {
                ...state,
                sideNavCollapsed     : !currentState,
            };
        
        case SET_MESSAGE:
            return {
                ...state,
                message     : action.message,
                messageIsVisible : true
            };
        
        default:
            return state
    }
}