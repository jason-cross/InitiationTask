import React from 'react';
import { 
  IconButton,
  ThemeProvider,
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { IActionProps } from '../../../utility/Interfaces';
import * as styles from './styles';

function DeleteButton (props: IActionProps) {
  const handleChange = () => {
    //Update todolist to remove deleted item
    const todoListCopy = props.todoList.filter((todo) => {
      return todo.id !== props.todo.id;
    });
    props.setTodoList(todoListCopy);
  }

  return (
    <ThemeProvider theme={styles.theme}>
      <IconButton
        onClick={handleChange}
        color='primary'
      >
        <DeleteIcon />
      </IconButton>
    </ThemeProvider>
  );
}

export default DeleteButton;