import React, { useState } from 'react';
import * as Todo from './utility/Todos';
import * as Users from './utility/Users';
import TodoTable from './components/TodoTable';
import './App.css';
import {
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

function App() {
  const todoList = Todo.useFetch();
  const userList = Users.useFetch();

  console.log(todoList);
  console.log(userList[0]);

  const [user, setUser] = useState(0);

  const handleChange = (event: SelectChangeEvent<number>) => {
    setUser(Number(event.target.value) as number);
  }

  return (
    <div className="App">
      <FormControl variant="filled">
        <InputLabel>User</InputLabel>
        <Select
          value={user}
          label="User"
          onChange={handleChange}
        >
          <MenuItem value={0}>All</MenuItem>
          {userList.map((user) => (
            <MenuItem value={Number(user.id)}>{user.firstName} {user.lastName}</MenuItem>
          ))}
        </Select>
      </FormControl>
      


      <TodoTable todoList={todoList} userList={userList} id={user.toString()}/>
    </div>
  );
}

export default App;
