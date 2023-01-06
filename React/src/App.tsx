import React from 'react';
import * as Todo from './utility/Todo';
import './App.css';

function App() {
  // fetch('api/users')
  // .then(response => response.json())
  // .then(data => console.log(data));

  // fetch('api/todos')
  // .then(response => response.json())
  // .then(data => console.log(data)); 

  const todoList = Todo.useFetch();
  
  todoList.map((a) => {
    console.log(a);
  })
  

  return (
    <div className="App">
      {todoList.map((todo) => (
        <p>{`Task ${todo.id} Assigned to User ${todo.user}: ${todo.name} - ${todo.isComplete ? 'Complete' : 'Incomplete'}`}</p>
      ))}
    </div>
  );
}

export default App;
