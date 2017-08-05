import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Reducer from './reducers'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import {get_week} from './actions/weekActions'
import {get_netids} from './actions/userActions'

const store = createStore(Reducer, applyMiddleware(thunkMiddleware))

get_week()(store.dispatch)
// get_netids()(store.dispatch)
ReactDOM.render(
    <Provider store={store}>
        <App />

    </Provider>, document.getElementById('app')
);
