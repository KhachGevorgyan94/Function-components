import {createStore} from "redux";

import {usersReducer} from "./reducers/users";

export const store = createStore(usersReducer)

//store = {
//     usersList: [],
//     firstName: 'khachik',
//     lastName: ''
// }