import React from "react";
import { Select, MenuItem } from '@mui/material';
import { User} from '../../utility/Data';

interface IProps {
  userList: User[],
  userSelection: string,
  setUserSelection: Function
}

function UserFilter (props: IProps) {
  return (
    <Select
      value={props.userSelection}
      onChange={(e) => props.setUserSelection(e.target.value)}
    >
      <MenuItem value={'all'}>All</MenuItem>
      {props.userList.map(({firstName, lastName}) => (
        <MenuItem value={`${firstName} ${lastName}`}>{`${firstName} ${lastName}`}</MenuItem>
      ))}
    </Select>
  )
}

export default UserFilter;