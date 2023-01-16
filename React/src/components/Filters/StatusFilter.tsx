import React from "react";
import { Select, MenuItem } from '@mui/material';

interface IProps {
  statusSelection: string,
  setStatusSelection: Function
}

function StatusFilter (props: IProps) {
  return (
    <Select
      value={props.statusSelection}
      onChange={(e) => props.setStatusSelection(e.target.value)}
    >
      <MenuItem value={'all'}>All</MenuItem>
      <MenuItem value={'complete'}>Complete</MenuItem>
      <MenuItem value={'incomplete'}>Incomplete</MenuItem>
    </Select>
  )
}

export default StatusFilter;