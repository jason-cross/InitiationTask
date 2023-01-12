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
import StatusSwitch from '../Inputs/StatusSwitch';
import DeleteButton from '../Inputs/DeleteButton';

const theme = createTheme({
  palette: {
    mode: 'dark'
  }
});

interface IProps {
  filteredData: Todo[],
  todoList: Todo[],
  setTodoList: Function,
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
    <ThemeProvider theme={theme}>
      <TableContainer className='table-container' component={Paper} sx={{ height: '70vh' }}>
        <Table className='table' stickyHeader>
          <col style={{width: '20%'}}/>
          <col style={{width: '50%'}}/>
          <col style={{width: '20%'}}/>
          <col style={{width: '10%'}}/>
          <TableHead>
            <TableRow>
              <TableCell>
                <h1>User</h1>
              </TableCell>
              <TableCell>
                <h1>Task</h1>
              </TableCell>
              <TableCell>
                <h1>Status</h1>
              </TableCell>
              <TableCell align='center' colSpan={2}>
                <h1>Actions</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{top: 95}}>
                <UserFilter {...props}/>
              </TableCell>
              <TableCell style={{top: 95}}>
                <TaskFilter {...props}/>
              </TableCell>
              <TableCell style={{top: 95}}>
                <StatusFilter {...props}/>
              </TableCell>
              <TableCell style={{top: 95}}>
                <h3>Set Complete</h3>
              </TableCell>
              <TableCell style={{top: 95}}>
                <h3>Delete</h3>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.filteredData.map((todo) => (
              <TableRow>
                <TableCell>{todo.user}</TableCell>
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.isComplete ? 'Complete': 'Incomplete'}</TableCell>
                <TableCell align='center'>
                  <StatusSwitch todo={todo} {...props}/>
                </TableCell>
                <TableCell align='center'>
                  <DeleteButton todo={todo} {...props}/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  )
}

export default TodoTable;