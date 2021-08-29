import React from 'react';

import { IconButton, InputAdornment, TextField, Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import NearMeIcon from '@material-ui/icons/NearMe';
import CloseIcon from '@material-ui/icons/Close';

import { Todo } from '../redux/types';

interface Props {
    data: Todo[];
    todoData: string;
    currentTodo: string | null;
    editMode: boolean;
    setEditMode: (state: boolean) => void;
    handleEditChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const AddTodo = (props: Props) => {
    const {
        handleChange,
        handleEditChange,
        handleClick,
        setEditMode,
        todoData,
        currentTodo,
        data,
        editMode,
    } = props;

    const arrayLen = data?.length === 10;

    const editModeState = (editState: boolean) => {
        if (editState) {
            return (
                <>
                    <IconButton
                        color='primary'
                        onClick={() => console.log('hey')}
                        disabled={currentTodo?.length ? false : true}
                    >
                        <CheckIcon />
                    </IconButton>
                    <IconButton color='primary' onClick={() => setEditMode(false)}>
                        <CloseIcon />
                    </IconButton>
                </>
            );
        } else {
            return <IconButton
                color='primary'
                onClick={handleClick}
                disabled={(arrayLen ? true : false) || (todoData.length ? false : true)}
            >
                <NearMeIcon />
            </IconButton>;
        }
    };

    const editInput = (editState: boolean) => {
        if (editState) {
            return <TextField
                label="Todo Input"
                placeholder='buy some eggs...'
                variant="outlined"
                style={{ width: '100%' }}
                onChange={handleEditChange}
                value={currentTodo}
                InputProps={{ endAdornment: <InputAdornment position="end">{editModeState(editMode)}</InputAdornment> }}
            />;
        } else {
            return <TextField
                label="Todo Input"
                placeholder='buy some eggs...'
                variant="outlined"
                style={{ width: '100%' }}
                onChange={handleChange}
                value={todoData}
                InputProps={{ endAdornment: <InputAdornment position="end">{editModeState(editMode)}</InputAdornment> }}
            />;
        }
    };

    if (arrayLen) return <Typography variant='overline' color='error'>
        To add new todos, please complete or delete your existing todos.
    </Typography>;

    return (
        <>
            {editInput(editMode)}
        </>
    );
};

export default AddTodo;
