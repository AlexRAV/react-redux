import {RECEIVE_DEPARTMENTS, REQUIRE_DEPARTMENTS, OPEN_DEPARTMENT_MODAL, CLOSE_DEPARTMENT_MODAL, EDIT_DEPARTMENT, LOAD_NEW_DEPARTMENT} from '../constants'

export function requireDepartment() {
    return {
        type: REQUIRE_DEPARTMENTS
    }
}

export function receiveDepartment(payload) {
    return {
        type: RECEIVE_DEPARTMENTS,
        payload
    }
}

export function openModal(payload) {
    return {
        type: OPEN_DEPARTMENT_MODAL,
        payload: {
            show: true,
            id: payload.id,
            name: payload.name
        }
    }
}

export function closeModal() {
    return {
        type: CLOSE_DEPARTMENT_MODAL
    }
}

export function editDepartment(payload) {
    return {
        type: EDIT_DEPARTMENT,
        payload
    }
}

export function loadNewDepartent(payload) {
    return {
        type: LOAD_NEW_DEPARTMENT,
        payload
    }
}