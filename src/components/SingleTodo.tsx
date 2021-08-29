import { ListItem, ListItemIcon, Checkbox, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions/todoActions';
import { Todo } from '../redux/types';

interface Props {
    todo: Todo;
    handleEdit: (id: string, todo: string) => void;
}

const SingleTodo: React.FC<Props> = ({ todo, handleEdit }) => {
    const dispatch = useDispatch();

    const textDecoration = todo.completed ? 'line-through' : undefined;

    return (
        <ListItem>
            <ListItemIcon>
                <Checkbox
                    disableRipple
                    edge="start"
                    color='primary'
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                />
            </ListItemIcon>
            <ListItemText primary={todo.text} style={{ textDecoration }} />
            <ListItemSecondaryAction>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >
                    <DeleteIcon color='secondary' />
                </IconButton>
                <IconButton
                    edge="end"
                    aria-label="edit"
                    onClick={() => handleEdit(todo.id, todo.text)}
                >
                    <EditIcon color='primary' />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default SingleTodo;
