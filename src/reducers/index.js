import {combineReducers} from 'redux'
import departments from './departments'
import employees from './employees'
import sidebar from './sidebar'
import { routerReducer } from 'react-router-redux'

export default combineReducers({departments, employees, sidebar, router: routerReducer})