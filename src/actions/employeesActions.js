import {RECEIVE_EMPLOYEES, REQUIRE_EMPLOYEES, EDIT_EMPLOYEE, OPEN_EMPLOYEE_MODAL, CLOSE_EMPLOYEE_MODAL, LOAD_NEW_EMPLOYEE} from '../constants'

export function requireEmployees() {
    return {
        type: REQUIRE_EMPLOYEES
    }
}

export function receiveEmployees(payload) {
    return {
        type: RECEIVE_EMPLOYEES,
        payload: payload
    }
}

export function openModal(payload) {
    return {
        type: OPEN_EMPLOYEE_MODAL,
        payload
    }
}

export function closeModal() {
    return {
        type: CLOSE_EMPLOYEE_MODAL
    }
}

export function editEmployee(payload) {
    return {
        type: EDIT_EMPLOYEE,
        payload: payload
    }
}

export function loadNewEmployee(payload) {
    return {
        type: LOAD_NEW_EMPLOYEE,
        payload
    }
}