import {ITodoState, TodoAction, TodoActionTypes} from "../../types/todo";

const initialState: ITodoState = {
    todos: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 10
}

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
    switch (action.type){
        case TodoActionTypes.todo_FETCH_TODOS:
            return {
                ...state,
                isLoading: true
            }
        case TodoActionTypes.todo_FETCH_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case TodoActionTypes.todo_FETCH_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case TodoActionTypes.todo_SET_TODO_PAGE:
            return {
                ...state,
                page: action.payload
            }
        default:
            return state
    }
}