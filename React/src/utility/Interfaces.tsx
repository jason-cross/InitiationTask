import { Todo, User } from './Data';

export interface IDisplayProps {
  userList: User[],
  todoList: Todo[],
  setTodoList: Function,
}

export interface IActionProps {
  todo: Todo,
  todoList: Todo[],
  setTodoList: Function
}