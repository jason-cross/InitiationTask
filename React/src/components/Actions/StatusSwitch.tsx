import React from 'react';
import { Switch } from '@mui/material';
import { IActionProps } from '../../utility/Interfaces';

function StatusSwitch (props: IActionProps) {
  const handleChange = () => {
    //Find index of current todo item
    const index = props.todoList.findIndex((todo) => {
      return todo.id === props.todo.id;
    });

    //Update todolist to change status of current todo item
    const todoListCopy = JSON.parse(JSON.stringify(props.todoList));
    todoListCopy[index].isComplete = !props.todoList[index].isComplete;
    props.setTodoList(todoListCopy);
  }

  return (
    <Switch 
      checked={props.todo.isComplete}
      onChange={handleChange}
    />
  )
}

export default StatusSwitch;