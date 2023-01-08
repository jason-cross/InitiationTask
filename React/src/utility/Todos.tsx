import { useState, useEffect } from "react";

export type Todo = {
  id: string,
  user: string,
  name: string,
  isComplete: boolean
}

export const useFetch = () => {
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