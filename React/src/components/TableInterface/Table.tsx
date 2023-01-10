import React from 'react';
import { Todo, User } from '../../utility/Data';
import UserFilter from '../Filters/UserFilter';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import TaskFilter from '../Filters/TaskFilter';
import StatusFilter from '../Filters/StatusFilter';


const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

interface IProps {
  todoList: Todo[],
  userList: User[],
  user: string,
  setUser: Function
  tasks: string,
  setTasks: Function,
  status: string,
  setStatus: Function
}

function TodoTable (props: IProps) {
  return (
    <div className = 'wrapper'>
      <ThemeProvider theme={theme}>
        <TableContainer className='table-container' component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <h1>User</h1>
                  <UserFilter {...props}/>
                </TableCell>
                <TableCell>
                  <h1>Task</h1>
                  <TaskFilter {...props}/>
                </TableCell>
                <TableCell>
                  <h1>Status</h1>
                  <StatusFilter {...props}/>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.todoList.map((todo) => (
                <TableRow>
                  <TableCell>{todo.user}</TableCell>
                  <TableCell>{todo.name}</TableCell>
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