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
  ThemeProvider,
} from '@mui/material';
import TaskFilter from '../Filters/TaskFilter';
import StatusFilter from '../Filters/StatusFilter';
import StatusSwitch from '../Actions/StatusSwitch';
import DeleteButton from '../Actions/DeleteButton';
import * as styles from './styles';

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
    <ThemeProvider theme={styles.theme}>
      <TableContainer component={Paper} sx={styles.container}>
        <Table className='table' stickyHeader>
          <col style={{width: '20%'}}/>
          <col style={{width: '50%'}}/>
          <col style={{width: '20%'}}/>
          <col style={{width: '10%'}}/>
          <TableHead>
            <TableRow>
              <TableCell sx={styles.heading1}>
                <h1>User</h1>
              </TableCell>
              <TableCell sx={styles.heading1}>
                <h1>Task</h1>
              </TableCell>
              <TableCell sx={styles.heading1}>
                <h1>Status</h1>
              </TableCell >
              <TableCell sx={styles.heading1} align='center' colSpan={2}>
                <h1>Actions</h1>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={styles.heading2}>
                <UserFilter {...props}/>
              </TableCell>
              <TableCell sx={styles.heading2}>
                <TaskFilter {...props}/>
              </TableCell>
              <TableCell sx={styles.heading2}>
                <StatusFilter {...props}/>
              </TableCell>
              <TableCell sx={styles.heading2}>
                <h3>Set Complete</h3>
              </TableCell>
              <TableCell sx={styles.heading2}>
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