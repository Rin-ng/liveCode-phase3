import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import getDataReducer from '../reducers/getDataReducer'
import thunk from 'redux-thunk';

const store = createStore(getDataReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
   )

export default store;