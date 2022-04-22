import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks";
import {fetchTodos, setTodoPage} from "../redux/action-creators/todo";

const TodoList: React.FC = () => {

    const {todos, isLoading, error, page, limit} = useAppSelector(state => state.todo)

    const pages = [1, 2, 3, 4, 5]

    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(fetchTodos(page, limit))
    }, [page])

    if (isLoading) {
        return <h1>...loading of users</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {
                todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)
            }
            <div
                style={{display: "flex"}}>
                {
                    pages.map((p, index) =>
                        <div key={index} style={{border: p === page ? '2px solid green' : '1px solid grey', padding: 10}}
                             onClick={() => {
                                 dispatch(setTodoPage(p))
                             }}
                        >{p}</div>
                    )
                }
            </div>


        </div>
    );
};

export default TodoList;