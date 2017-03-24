import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import createHistory from 'history/createBrowserHistory'
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'
import App from './containers/App'

const history = createHistory();
const middleware = routerMiddleware(history);
const store = configureStore(middleware);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
