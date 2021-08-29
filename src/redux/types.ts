export interface Todo {
    id: string,
    text: string;
    completed: boolean;
};

export interface InitialState {
    data: Todo[];
    loading: boolean;
    error: boolean;
};

interface ADD_TODO_START {
    type: 'ADD_TODO_START';
}

interface ADD_TODO_SUCCESS {
    type: 'ADD_TODO_SUCCESS';
    payload: {
        id: string,
        text: string;
        completed: boolean;
    };
}

interface ADD_TODO_FAILURE {
    type: 'ADD_TODO_FAILURE';
}

interface TOGGLE_TODO {
    type: 'TOGGLE_TODO';
    payload: {
        id: string;
    };
}

interface DELETE_TODO {
    type: 'DELETE_TODO';
    payload: {
        id: string;
    };
}

export enum TodoActionTypes {
    ADD_TODO_START = 'ADD_TODO_START',
    ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS',
    ADD_TODO_FAILURE = 'ADD_TODO_FAILURE',
    TOGGLE_TODO = 'TOGGLE_TODO',
    DELETE_TODO = 'DELETE_TODO',
}

export type TodoAction = ADD_TODO_START | ADD_TODO_SUCCESS | ADD_TODO_FAILURE | TOGGLE_TODO | DELETE_TODO;