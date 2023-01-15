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
  const [filteredData, setFilteredData] = useState<Todo[]>([]);
  const [user, setUser] = useState('all');
  const [tasks, setTasks] = useState('');
  const [status, setStatus] = useState('all');

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
      setFilteredData(todoMerged);
    }

    fetchData();
  }, []);

  //Use effect called whenever user, tasks, or status filter is changed
  useEffect(() => {
    const username = (user === 'all') ? '' : user;
    const allStatus = (status === 'all');
    const boolStatus = (status === 'complete');
    setFilteredData(todoList.filter((todo) => {
      return todo.user.includes(username) 
        && todo.name.toUpperCase().includes(tasks.toUpperCase()) 
        && (allStatus || todo.isComplete === boolStatus);
    }));
  }, [user, tasks, status, todoList]);


  const props = {
    filteredData,
    todoList,
    setTodoList,
    userList,
    user,
    setUser,
    tasks,
    setTasks,
    status,
    setStatus
  }

  return (
    <div className = 'App'>
      <div className = 'table-wrapper'>
        <TodoTable {...props}/>
      </div>
      <AddTaskModal userList={userList} todoList={todoList} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
