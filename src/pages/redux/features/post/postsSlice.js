import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: 'Learning redux toolkit', content: "I've ....."},
    {id: 2, title: 'Learning redux toolkit2', content: "I've .....2"}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const {postAdded} = postsSlice.actions
export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer 