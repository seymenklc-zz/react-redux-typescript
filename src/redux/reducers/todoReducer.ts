import { TodoAction, InitialState, TodoActionTypes } from "../types";

const defaultState: InitialState = {
    data: [],
    loading: true,
    error: false,
};

const todoReducer = (state = defaultState, action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO_START:
            return {
                ...state,
                loading: true,
                error: false
            };
        case TodoActionTypes.ADD_TODO_SUCCESS: {
            const { id, text, completed } = action.payload;
            return {
                ...state,
                loading: false,
                error: false,
                data: [...state.data, { text, id, completed }]
            };
        }
        case TodoActionTypes.ADD_TODO_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case TodoActionTypes.TOGGLE_TODO:
            const todo = state.data.map(todo => action.payload.id === todo.id ? todo.completed = !todo.completed : todo);
            return {
                ...state,
                todo
            };
        case TodoActionTypes.DELETE_TODO:
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== action.payload.id)
            };
        default:
            return state;
    }
};

export default todoReducer;