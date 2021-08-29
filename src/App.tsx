import React, { useState } from "react";

import { Container, Typography } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/reducers/rootReducer";
import { addTodo } from "./redux/actions/todoActions";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const App: React.FC = () => {
  const [todoData, setTodoData] = useState<string>('');
  const [currentTodo, setCurrentTodo] = useState<string>('');
  const [editMode, setEditMode] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { data, error } = useSelector((state: RootState) => state.todos);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setTodoData(e.currentTarget.value);
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => setCurrentTodo(e.currentTarget.value);

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTodo(todoData, false));
    setTodoData('');
    setCurrentTodo('');
  };

  const handleEdit = (id: string, todoText: string) => {
    setEditMode(true);
    data.map(todo => todo.id === id ? setCurrentTodo(todo.text) : todo.text);
  };

  return (
    <Container maxWidth='sm'>
      {/* Heading */}
      <Typography variant='h3' color='primary'>Todo List</Typography>
      <Typography variant='overline' color='textSecondary' style={{ marginLeft: '28rem' }} >@seymennklc</Typography>
      <hr style={{ marginBottom: 15 }} />

      {/* Todo Input */}
      <AddTodo
        data={data}
        todoData={todoData}
        handleChange={handleChange}
        handleClick={handleClick}
        currentTodo={currentTodo}
        editMode={editMode}
        setEditMode={setEditMode}
        handleEditChange={handleEditChange}
      />

      {/* Todo List */}
      <TodoList
        data={data}
        error={error}
        handleEdit={handleEdit}
      />
    </Container>
  );
};

export default App;
