
export interface IUserState {
    users: any[];
    isLoading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    user_FETCH_USERS = 'user_FETCH_USERS',
    user_FETCH_USERS_SUCCESS = 'user_FETCH_USERS_SUCCESS',
    user_FETCH_USERS_ERROR = 'user_FETCH_USERS_ERROR'
}

interface IFetchUserAction {
    type: UserActionTypes.user_FETCH_USERS;
}
interface IFetchUserSuccessAction {
    type: UserActionTypes.user_FETCH_USERS_SUCCESS;
    payload: any[];
}
interface IFetchUserErrorAction {
    type: UserActionTypes.user_FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction = IFetchUserAction | IFetchUserSuccessAction | IFetchUserErrorAction