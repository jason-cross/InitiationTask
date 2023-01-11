import React from 'react';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo, User } from '../../utility/Data';

interface IProps {
  todo: Todo,
  todoList: Todo[],
  setTodoList: Function
}

function DeleteButton (props: IProps) {
  const handleChange = () => {
    //Update todolist to remove deleted item
    const todoListCopy = props.todoList.filter((todo) => {
      return todo.id !== props.todo.id;
    });
    props.setTodoList(todoListCopy);
  }

  return (
    <IconButton
      onClick={handleChange}
    >
      <DeleteIcon />
    </IconButton>
  );
}

export default DeleteButton;