import { type TodoItemType } from "../types/TodoItem";
import { LuTrash, LuFileEdit } from "react-icons/lu";
import { IconButton } from "./IconButton";

type TodoItemProps = {
  todo: TodoItemType;
  showModal: (todo: TodoItemType) => void;
  delTodo: (id: string) => void;
  toggleStatus: (id: string) => void;
};

export const TodoItem = ({
  todo,
  showModal,
  delTodo,
  toggleStatus,
}: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between border-b border-zinc-200 p-2 py-3 duration-200 ease-linear hover:bg-zinc-700">
      <strong
        onClick={() => toggleStatus(todo.id)}
        className={`max-w-[70%] flex-1 cursor-pointer break-words tracking-wide sm:max-w-none
        ${todo.status ? "italic text-sky-500 line-through" : "text-zinc-200"}`}
      >
        {todo.title}
      </strong>
      <div className="flex gap-3">
        <IconButton onClick={() => showModal(todo)}>
          <LuFileEdit />
        </IconButton>
        <IconButton onClick={() => delTodo(todo.id)}>
          <LuTrash />
        </IconButton>
      </div>
    </div>
  );
};
