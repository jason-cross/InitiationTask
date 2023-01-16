import React, { useEffect, useState } from 'react';
import TodoTable from './components/TodoTable';
import {
  User,
  getUsers,
  Todo,
  getTodos
} from './utility/Data';
import './App.css';
import AddTaskModal from './components/Modals/AddTaskModal';

function App () {
  //Initialise use states
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [userList, setUserList] = useState<User[]>([]);

  //Use effect called once to fetch data and set use states
  useEffect(() => {
    const fetchData = async() => {
      //Fetch user data
      const users: User[] = await getUsers();
      
      //Fetch todo data
      const todos: Todo[] = await getTodos();

      //Merge user names into todo data
      let todoMerged: Todo[] = [];
      for (const todo of todos) {
        const user = users.find(user => user.id === todo.user);
        todoMerged.push({
          id: todo.id,
          user: `${user?.firstName} ${user?.lastName}` || '',
          name: todo.name,
          isComplete: todo.isComplete
        });
      }

      //Set use states
      setUserList(users);
      setTodoList(todoMerged);
    }

    fetchData();
  }, []);

  const props = {
    todoList,
    setTodoList,
    userList,
  }

  return (
    <div className = 'App'>
      <div className = 'table-wrapper'>
        <TodoTable {...props}/>
      </div>
      <AddTaskModal {...props}/>
    </div>
  );
}

export default App;