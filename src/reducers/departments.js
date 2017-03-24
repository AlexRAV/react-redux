import {RECEIVE_DEPARTMENTS, OPEN_DEPARTMENT_MODAL, CLOSE_DEPARTMENT_MODAL, LOAD_NEW_DEPARTMENT} from '../constants'


const initialState = {
    list: [
        {
            id: '',
            name: ''
        }
    ],
    modal: {
        show: false,
        id: '',
        name: ''
    }
};

export default function departments (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_DEPARTMENTS:
            return {
                ...state,
                list: action.payload
            };
        case OPEN_DEPARTMENT_MODAL:
            return {
                ...state,
                modal: {
                    show: true,
                    id: action.payload.id,
                    name: action.payload.name
                }
            };
        case  CLOSE_DEPARTMENT_MODAL:
            return {
                ...state,
                modal: {
                    show: false,
                    id: '',
                    name: ''
                }
            };
        case LOAD_NEW_DEPARTMENT:
            let list = [...state.list];
            list[action.payload.id] = action.payload;

            return {
                ...state,
                list: list
            };
        default:
            return state
    }
}