import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/couter/counterSlice';
import postsReducer from '../features/post/postsSlice'
import usersReducer from '../features/users/usersSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
})
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer
    
})

export const persistor = persistStore(store)