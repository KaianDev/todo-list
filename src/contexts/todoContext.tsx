import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { todoReducer } from "../reducers/todoReducer";
import { TodoItemType } from "../types/TodoItem";

const storage = localStorage.getItem("todo-list");

type ContextType = {
  todos: TodoItemType[];
  addTodo: (title: string) => void;
  delTodo: (id: string) => void;
  toggleStatusTodo: (id: string) => void;
  updateTitleTodo: (id: string, title?: string) => void;
  modal: boolean;
  showModal: () => void;
  hideModal: () => void;
};

const Context = createContext<ContextType | null>(null);

type ContextProviderProps = {
  children: ReactNode;
};

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const initialData: TodoItemType[] = JSON.parse(storage || "[]") || [];
  const [todos, dispatch] = useReducer(todoReducer, initialData);
  const [modal, setModal] = useState(false);

  const addTodo = (title: string) => {
    dispatch({ type: "Add", payload: { title } });
  };

  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
  }, [todos]);

  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  const delTodo = (id: string) => {
    dispatch({ type: "Del", payload: { id } });
  };

  const toggleStatusTodo = (id: string) => {
    dispatch({ type: "Toggle", payload: { id } });
  };

  const updateTitleTodo = (id: string, title?: string) => {
    dispatch({ type: "Update", payload: { id, title } });
  };

  return (
    <Context.Provider
      value={{
        todos,
        addTodo,
        delTodo,
        toggleStatusTodo,
        updateTitleTodo,
        modal,
        showModal,
        hideModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useTodo = () => useContext(Context);
