import React from 'react';

import { List, Typography } from "@material-ui/core";

import SingleTodo from './SingleTodo';

import { Todo } from '../redux/types';

interface Props {
    data: Todo[];
    error: boolean;
    handleEdit: (id: string, todoText: string) => void;
}

const TodoList: React.FC<Props> = ({ data, error, handleEdit }) => {
    if (error) {
        return (
            <Typography color='error' align='center' variant='h5'>
                There was an error!
            </Typography>
        );
    }

    return (
        <List>
            {data?.length ? (
                data?.map(todo => (
                    <div key={todo.id}>
                        <SingleTodo todo={todo} handleEdit={handleEdit} />
                        <hr style={{ width: '78%' }} />
                    </div>
                ))) : (
                <Typography style={{ marginTop: 10 }} variant='h6' align='center' color='textSecondary'>
                    No todos available...
                </Typography>)}
        </List>
    );
};

export default TodoList;

