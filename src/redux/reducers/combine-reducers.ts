import {combineReducers} from "redux";
import {userReducer} from "./userReducer";

//Legacy using. For now, we use configureStore against createStore
const rootReducer = combineReducers({
    user: userReducer,
})