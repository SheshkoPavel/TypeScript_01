import {applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from "./reducers/userReducer";
import {todoReducer} from "./reducers/todoReducer";

//export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
    reducer: {
        user: userReducer,
        todo: todoReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch