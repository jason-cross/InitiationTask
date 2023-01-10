export type User = {
  id: string,
  firstName: string,
  lastName: string,
}

export type Todo = {
  id: string,
  user: string,
  name: string,
  isComplete: boolean,
}

export async function getUsers() {
  const response = await fetch('api/users');
  const data = await response.json();
  return data.users;
}

export async function getTodos() {
  const response = await fetch('api/todos');
  const data = await response.json();
  return data.todos;
}