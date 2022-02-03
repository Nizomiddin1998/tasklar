import {applyMiddleware, createStore} from  'redux'
import {logger} from  'redux-logger';
import usersReducer from "./reducer/usersReducer";

const store = createStore( usersReducer,applyMiddleware(logger))

export default store;
