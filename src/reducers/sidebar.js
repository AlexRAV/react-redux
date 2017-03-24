import {SHOW_SIDEBAR, HIDE_SIDEBAR} from '../constants/'

const initialState = {
    show: false
};

export default function sidebar (state = initialState, action) {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                show: true
            };
        case HIDE_SIDEBAR:
            return {
                ...state,
                show: false
            };
        default:
            return state
    }
}