import {RECEIVE_EMPLOYEES, OPEN_EMPLOYEE_MODAL, CLOSE_EMPLOYEE_MODAL, LOAD_NEW_EMPLOYEE} from '../constants/index'


const initialState = {
    list: [
        {
            id: '',
            firstName: '',
            lastName: '',
            departmentId: 1
        }
    ],
    modal: {
        show: false,
        id: '',
        firstName: '',
        lastName: '',
        departmentId: ''
    }
};

export default function employees (state = initialState, action) {
    switch (action.type) {
        case RECEIVE_EMPLOYEES:
            return {
                ...state,
                list: action.payload
            };
        case OPEN_EMPLOYEE_MODAL:
            return {
                ...state,
                modal: {
                    show: true,
                    id: action.payload.id,
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    departmentId: action.payload.departmentId
                }
            };
        case  CLOSE_EMPLOYEE_MODAL:
            return {
                ...state,
                modal: {
                    show: false,
                    id: '',
                    firstName: '',
                    lastName: '',
                    departmentId: ''
                }
            };
        case LOAD_NEW_EMPLOYEE:
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