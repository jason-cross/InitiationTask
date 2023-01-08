import React from 'react';
import { Todo } from '../../utility/Todos';
import { User } from '../../utility/Users';
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    createTheme,
    ThemeProvider
  } from '@mui/material';


  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });

  interface IProps {
    todoList: Todo[]
    userList: User[];
    id: string
  }

  function TodoTable (props: IProps) {
    const filterBody = () => {
      const todoListCopy : Todo[] = JSON.parse(JSON.stringify(props.todoList));
      const filteredList = todoListCopy.filter(todo => {
        return ((todo.user === props.id) || (props.id === "0"));
      });

      filteredList.map((todo: Todo) => {
        const user = props.userList.find(user => user.id === todo.user);
        console.warn({first: user?.firstName, last: user?.lastName});
        todo.user = `${user?.firstName} ${user?.lastName}` || '';
      });

      return filteredList;
    }

    return (
      <div className = 'wrapper'>
        <ThemeProvider theme={theme}>
          <TableContainer className='table-container' component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filterBody().map((todo) => (
                  <TableRow>
                    <TableCell>{todo.id}</TableCell>
                    <TableCell>{todo.name}</TableCell>
                    <TableCell>{todo.user}</TableCell>
                    <TableCell>{todo.isComplete ? 'Complete' : 'Incomplete'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </ThemeProvider>
      </div>
    )
  }

  export default TodoTable;