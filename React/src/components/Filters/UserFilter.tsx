import React from "react";
import { Select, MenuItem } from '@mui/material';
import {Todo, User} from '../../utility/Data';

interface IProps {
  todoList: Todo[],
  userList: User[],
  user: string,
  setUser: Function
}

function UserFilter (props: IProps) {
  return (
    <Select
      value={props.user}
      onChange={(e) => props.setUser(e.target.value)}
    >
      <MenuItem value={'all'}>All</MenuItem>
      {props.userList.map(({firstName, lastName}) => (
        <MenuItem value={`${firstName} ${lastName}`}>{`${firstName} ${lastName}`}</MenuItem>
      ))}
    </Select>
  )
}

export default UserFilter;