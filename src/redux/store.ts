import {applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers/combine-reducers";
import { configureStore } from '@reduxjs/toolkit'
import {userReducer} from "./reducers/userReducer";

//export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})