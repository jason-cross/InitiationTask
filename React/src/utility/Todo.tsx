import { useState, useEffect } from "react";

export const useFetch = () => {
    type Todo = {
      id: string,
      user: string,
      name: string,
      isComplete: boolean
    };
    const [todoList, setTodoList] = useState<Todo[]>([]);
  
    useEffect(() => {
      const fetchData = async() => {
        const response = await fetch('api/todos');
        const data = await response.json();
        setTodoList(data.todos);
      }
  
      fetchData();
    }, []);
  
    return todoList;
}