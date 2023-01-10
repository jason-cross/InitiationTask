import React from "react";
import { Select, MenuItem } from '@mui/material';
import {Todo, User} from '../../utility/Data';

interface IProps {
  todoList: Todo[],
  userList: User[],
  status: string,
  setStatus: Function
}

function StatusFilter (props: IProps) {
  return (
    <Select
      value={props.status}
      onChange={(e) => props.setStatus(e.target.value)}
    >
      <MenuItem value={'all'}>All</MenuItem>
      <MenuItem value={'complete'}>Complete</MenuItem>
      <MenuItem value={'incomplete'}>Incomplete</MenuItem>
    </Select>
  )
}

export default StatusFilter;