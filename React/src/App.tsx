import React from 'react';
import * as Todo from './utility/Todo';
import './App.css';
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
} from '@material-ui/core';

const theme = createTheme({
  palette: {
    type: 'dark'
  }
})

function App() {
  // fetch('api/users')
  // .then(response => response.json())
  // .then(data => console.log(data));

  // fetch('api/todos')
  // .then(response => response.json())
  // .then(data => console.log(data)); 

  const todoList = Todo.useFetch();

  return (
    <div className="App">
      <div className = 'wrapper'>
        <ThemeProvider theme={theme}>
          <TableContainer className='table-container' component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Task</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>Complete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {todoList.map((todo) => (
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
    </div>
  );
}

export default App;
