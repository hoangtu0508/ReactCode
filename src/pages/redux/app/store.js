import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/couter/counterSlice';
import postsReducer from '../features/post/postsSlice'
import usersReducer from '../features/users/usersSlice'

export default configureStore({
    reducer:{
        counter: counterReducer,
        posts: postsReducer,
        users: usersReducer,
    }
    
})