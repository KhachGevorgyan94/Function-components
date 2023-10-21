import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo:{
        name:'Khachik',
        age:20
    }
}


const usersSlice = createSlice({
    initialState,
    name:'vazgen',
    reducers:{
        // decremented: state => {
        //     state.value -= 1
        // },

        changeName(state,action){
            state.userInfo.name = action.payload
        },
        changeAge(state,action){
            state.userInfo.age = action.payload
        }
    },
    extraReducers:{

    }
})

export const { changeName, changeAge } = usersSlice.actions

export default usersSlice.reducer