import React from "react";
import { TextField } from '@mui/material';

interface IProps {
  setTaskSelection: Function
}

function TaskFilter (props: IProps) {
  return (
    <TextField
    id='outlined-basic'
    label='Search task'
    variant='outlined'
    onChange={(e) => props.setTaskSelection(e.target.value)}
    />
  )
}

export default TaskFilter;