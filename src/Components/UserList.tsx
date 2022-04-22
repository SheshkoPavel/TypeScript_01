import React from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector} from "../hooks";

const UserList: React.FC = () => {

    // The `state` arg is correctly typed as `RootState` already
    const userState = useAppSelector(state => state.user)
    console.log(userState)

    const dispatch = useAppDispatch()

    return (
        <div>

        </div>
    );
};

export default UserList;