
export interface ITodoState {
    todos: any[];
    isLoading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    todo_FETCH_TODOS = 'todo_FETCH_TODOS',
    todo_FETCH_TODOS_SUCCESS = 'todo_FETCH_TODOS_SUCCESS',
    todo_FETCH_TODOS_ERROR = 'todo_FETCH_TODOS_ERROR',
    todo_SET_TODO_PAGE = 'todo_SET_TODO_PAGE'
}

interface IFetchTodos {
    type: TodoActionTypes.todo_FETCH_TODOS
}
interface IFetchTodosSuccess {
    type: TodoActionTypes.todo_FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface IFetchTodosError {
    type: TodoActionTypes.todo_FETCH_TODOS_ERROR;
    payload: string;
}
interface ISetTodoPage {
    type: TodoActionTypes.todo_SET_TODO_PAGE;
    payload: number;
}

export type TodoAction = IFetchTodos | IFetchTodosSuccess | IFetchTodosError | ISetTodoPage