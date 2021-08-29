import { Dispatch } from "redux";
import { v4 as uuidv4 } from 'uuid';
import { TodoActionTypes } from "../types";

export const addTodo = (todoData: string, completed: boolean) => (dispatch: Dispatch) => {
    dispatch({ type: TodoActionTypes.ADD_TODO_START });
    try {
        dispatch({
            type: TodoActionTypes.ADD_TODO_SUCCESS,
            payload: {
                id: uuidv4(),
                text: todoData,
                completed
            }
        });
    } catch (error) {
        dispatch({ type: TodoActionTypes.ADD_TODO_FAILURE });
    }
};

export const toggleTodo = (id: string) => {
    return {
        type: TodoActionTypes.TOGGLE_TODO,
        payload: { id }
    };
};

export const deleteTodo = (id: string) => {
    return {
        type: TodoActionTypes.DELETE_TODO,
        payload: { id }
    };
};
