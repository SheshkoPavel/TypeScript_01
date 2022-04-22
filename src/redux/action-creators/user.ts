import axios from "axios";
import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
    try {
        dispatch({type: UserActionTypes.user_FETCH_USERS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({type: UserActionTypes.user_FETCH_USERS_SUCCESS, payload: response.data})
    } catch (error) {
        dispatch({
            type: UserActionTypes.user_FETCH_USERS_ERROR,
            payload: 'Error loading users'
        })
    }
}