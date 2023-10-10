import {store} from "../../index";

const initialState = {
    usersList: [],

    firstName: 'khachik',
    lastName: ''
}


// action =>  {type, payload}
export const usersReducer = (state = initialState, action) => {

    console.log(state, action)

    switch (action.type) {
        case 'SET_MY_NAME': {
            return {...state, lastName: action.payload}
        }
        default: {
            return state
        }
    }
}

