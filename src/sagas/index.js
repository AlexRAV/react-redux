import {requireDepartment, receiveDepartment, loadNewDepartent} from '../actions/departmentActions'
import {requireEmployees, receiveEmployees, loadNewEmployee} from '../actions/employeesActions'
import axios from 'axios'
import {REQUIRE_DEPARTMENTS, REQUIRE_EMPLOYEES, EDIT_DEPARTMENT, EDIT_EMPLOYEE} from '../constants'
import {call, put, takeEvery, takeLatest, take, select} from 'redux-saga/effects'

function* loadDepartments() {
    let response = yield axios({
        url: 'http://localhost:3000/departments',
        method: 'GET'
    }).then(response => response.data);
    yield put(receiveDepartment(response));
}

function* editDepartments(action) {
    let response = yield axios({
        url: `http://localhost:3000/departments/${action.payload.id}`,
        method: 'PUT',
        data: {
            name: action.payload.name
        }
    }).then(response => response.data);
    yield put(loadNewDepartent(response));
}

function* loadEmployees() {
    let response = yield axios({
        url: 'http://localhost:3000/employees',
        method: 'GET'
    }).then(response => response.data);
    yield put(receiveEmployees(response));
}

function* editEmployee(action) {
    let response = yield axios({
        url: `http://localhost:3000/employees/${action.payload.id}`,
        method: 'PUT',
        data: {
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
            departmentId: action.payload.departmentId
        }
    }).then(response => response.data);
    yield put(loadNewEmployee(response));
}

/* WATCHERS */

export function* watchDepartments() {
    yield takeLatest(REQUIRE_DEPARTMENTS, loadDepartments);
}

export function* watchEditDepartments() {
    yield takeLatest(EDIT_DEPARTMENT, editDepartments);
}

export function* watchEmployees() {
    yield takeLatest(REQUIRE_EMPLOYEES, loadEmployees);
}

export function* watchEditEmployee() {
    yield takeLatest(EDIT_EMPLOYEE, editEmployee);
}