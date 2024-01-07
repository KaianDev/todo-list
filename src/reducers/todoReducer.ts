import { Reducer } from "react";
import { TodoItemType } from "../types/TodoItem";
import { v4 as uuidv4 } from "uuid";

export const initialData: TodoItemType[] = [
  {
    id: uuidv4(),
    title: "Learn React",
    status: false,
  },
  {
    id: uuidv4(),
    title: "Learn Redux",
    status: false,
  },
];

type AddTodo = {
  type: "Add";
  payload: {
    title: string;
  };
};

type ToggleStatusTodo = {
  type: "Toggle";
  payload: {
    id: string;
  };
};

type UpdateTodoTitle = {
  type: "Update";
  payload: {
    id: string;
    title?: string;
  };
};

type DeleteTodo = {
  type: "Del";
  payload: {
    id: string;
  };
};

type ActionType = AddTodo | UpdateTodoTitle | DeleteTodo | ToggleStatusTodo;

export const todoReducer: Reducer<TodoItemType[], ActionType> = (
  todos,
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case "Add":
      return [...todos, { id: uuidv4(), title: payload.title, status: false }];

    case "Update":
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            title: payload.title ? payload.title : todo.title,
          };
        }
        return todo;
      });

    case "Del":
      return todos.filter((todo) => todo.id !== payload.id);

    case "Toggle":
      return todos.map((todo) => {
        if (todo.id === payload.id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      });
    default:
      return todos;
  }
};
