import React, { useState, useEffect } from 'react';
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
import { IDisplayProps } from '../../utility/Interfaces';
import * as styles from './styles';

function TodoTable (props: IDisplayProps) {
  //Initialise use states for filters
  const [filteredTodoList, setFilteredTodoList] = useState<Todo[]>([]);
  const [userSelection, setUserSelection] = useState('all');
  const [taskSelection, setTaskSelection] = useState('');
  const [statusSelection, setStatusSelection] = useState('all');

  //Use effect called whenever user, tasks, or status filter is changed
  //Filters todo list to only display tasks that match selections
  useEffect(() => {
    const username = (userSelection === 'all') ? '' : userSelection;
    const allStatus = (statusSelection === 'all');
    const boolStatus = (statusSelection === 'complete');
    setFilteredTodoList(props.todoList.filter((todo) => {
      return todo.user.includes(username) 
        && todo.name.toUpperCase().includes(taskSelection.toUpperCase()) 
        && (allStatus || todo.isComplete === boolStatus);
    }));
  }, [userSelection, taskSelection, statusSelection, props.todoList]);

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
                <UserFilter
                  userList={props.userList}
                  userSelection={userSelection}
                  setUserSelection={setUserSelection}
                />
              </TableCell>
              <TableCell sx={styles.heading2}>
                <TaskFilter
                  setTaskSelection={setTaskSelection}
                />
              </TableCell>
              <TableCell sx={styles.heading2}>
                <StatusFilter
                  statusSelection={statusSelection}
                  setStatusSelection={setStatusSelection}
                />
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
            {filteredTodoList.map((todo) => (
              <TableRow>
                <TableCell>{todo.user}</TableCell>
                <TableCell>{todo.name}</TableCell>
                <TableCell>{todo.isComplete ? 'Complete': 'Incomplete'}</TableCell>
                <TableCell align='center'>
                  <StatusSwitch 
                    todo={todo}
                    todoList={props.todoList}
                    setTodoList={props.setTodoList}
                  />
                </TableCell>
                <TableCell align='center'>
                  <DeleteButton 
                    todo={todo}
                    todoList={props.todoList}
                    setTodoList={props.setTodoList}
                  />
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