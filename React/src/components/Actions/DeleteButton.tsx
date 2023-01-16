import React from 'react';
import { 
  IconButton,
  ThemeProvider,
  createTheme
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Todo} from '../../utility/Data';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff1744'
    }
  }
});

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
    <ThemeProvider theme={theme}>
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