import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-use-reducer/todoReducer';

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer( todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos]);

    const handlerAddTodoItem = (todoItem) => {
        console.log(todoItem);

        const action = {
            type: '[TODO] Add Todo',
            payload: todoItem
        };

        dispatch(action);
    }

    const handlerDeleteTodoItem = (id) => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        };

        dispatch(action);
    }

    const handlerToggleTodoItem = (id) => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        };

        dispatch(action);
    }
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodos: todos.filter( todo => !todo.done).length,
        handlerAddTodoItem,
        handlerDeleteTodoItem,
        handlerToggleTodoItem,
    }
}
