// import {createStore, combineReducers} from "redux";
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {usersReducer} from "./reducers/users";
import {productReducer} from "./reducers/products";

const customCombineReducers = combineReducers({
    users:usersReducer,
    productReducer
})

// usersReducer:usersReducer
// export const store = createStore(usersReducer)
export const store = createStore(customCombineReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//store = {
//     usersList: [],
//     firstName: 'khachik',
//     lastName: ''
// }

/**
 * store = {
 *     users:{
 *
 *     },
 *     productReducer:{
 *
 *     }
 *
 * }
 *
 * **/