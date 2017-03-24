import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {watchDepartments, watchEmployees, watchEditDepartments, watchEditEmployee} from '../sagas'
import rootReducer from '../reducers'

export default function configureStore (middleware) {
    const sagaMiddleware = createSagaMiddleware();
    let store = createStore(rootReducer, applyMiddleware(sagaMiddleware, middleware));
    sagaMiddleware.run(watchDepartments);
    sagaMiddleware.run(watchEmployees);
    sagaMiddleware.run(watchEditDepartments);
    sagaMiddleware.run(watchEditEmployee);
    return store;
}