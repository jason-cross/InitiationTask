import React from "react";
import { Select, MenuItem, TextField } from '@mui/material';
import {Todo, User} from '../../utility/Data';

interface IProps {
  todoList: Todo[],
  userList: User[],
  tasks: string,
  setTasks: Function
}

function TaskFilter (props: IProps) {
  return (
    <TextField
    id='outlined-basic'
    label='Search task'
    variant='outlined'
    onChange={(e) => props.setTasks(e.target.value)}
    />
  )
}

export default TaskFilter;