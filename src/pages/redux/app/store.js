import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/couter/counterSlice';
import postsReducer from '../features/post/postsSlice'

export default configureStore({
    reducer:{
        counter: counterReducer,
        posts: postsReducer,
    }
    
})