import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchUsers} from "../redux/action-creators/user";

const UserList: React.FC = () => {

    // The `state` arg is correctly typed as `RootState` already. Destructing state
    const {users, error, isLoading} = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchUsers())
        console.log('work')
    }, [])

    if (isLoading) {
        return <h1>...loading of users</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                users.map((u, index) => <div key={index}>{u.name}</div>)
            }
        </div>
    );
};

export default UserList;