import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name: 'Hoang Tu'},
    {id:1, name: 'Truong Hoang Tu'},
    {id:2, name:'Tu Truong'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer