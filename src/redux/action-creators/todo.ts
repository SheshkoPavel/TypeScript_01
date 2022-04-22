import {Dispatch} from "redux";
import {TodoAction, TodoActionTypes} from "../../types/todo";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => async (dispatch: Dispatch<TodoAction>) => {
    try {
        dispatch({type: TodoActionTypes.todo_FETCH_TODOS})
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
            params: {
                _page: page,
                _limit: limit
            }
        })
        dispatch({type: TodoActionTypes.todo_FETCH_TODOS_SUCCESS, payload: response.data})

    } catch (e) {
        dispatch({
            type: TodoActionTypes.todo_FETCH_TODOS_ERROR,
            payload: 'Error loading todos'
        })
    }
}

export function setTodoPage(page: number): TodoAction {
    return {
        type: TodoActionTypes.todo_SET_TODO_PAGE,
        payload: page
    }
}