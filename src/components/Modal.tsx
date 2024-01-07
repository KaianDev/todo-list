import { KeyboardEvent, useState } from "react";
import { TodoItemType } from "../types/TodoItem";
import { Button } from "./Button";
import { Input } from "./Input";

type ModalProps = {
  todo: TodoItemType;
  hideModal: () => void;
  updateTodo: (id: string, title: string) => void;
};

export const Modal = ({ todo, hideModal, updateTodo }: ModalProps) => {
  const [input, setInput] = useState(todo.title);

  const handleEnterClick = (key: KeyboardEvent) => {
    if (key.key === "Enter") {
      updateTodo(todo.id, input);
    }
  };

  return (
    <div className="z-50 m-6 flex w-full max-w-xl flex-col gap-3 rounded-md bg-zinc-800 p-6">
      <h2 className="text-xl text-zinc-200">Editar To-do</h2>
      <Input
        onKeyUp={handleEnterClick}
        defaultValue={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex justify-end  gap-3">
        <Button
          disabled={input.trim() === ""}
          onClick={() => updateTodo(todo.id, input)}
        >
          Confirmar
        </Button>
        <Button onClick={hideModal} variants="secondary">
          Cancelar
        </Button>
      </div>
    </div>
  );
};
