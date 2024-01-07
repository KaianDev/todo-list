import { KeyboardEvent, useState } from "react";
import { useTodo } from "./contexts/todoContext";
import { TodoItem } from "./components/TodoItem";
import { FadeIn } from "./components/FadeIn";
import { TodoItemType } from "./types/TodoItem";
import { Modal } from "./components/Modal";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  const [input, setInput] = useState("");
  const [modalTodo, setModalTodo] = useState<TodoItemType>();
  const ctx = useTodo();

  const completed = ctx?.todos.filter((todo) => todo.status);

  const handleAddTodo = () => {
    ctx?.addTodo(input);
    setInput("");
  };

  const handleEnterClick = (key: KeyboardEvent) => {
    if (key.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleDeleteTodo = (id: string) => {
    ctx?.delTodo(id);
  };

  const handleShowModal = (todo: TodoItemType) => {
    setModalTodo(todo);
    ctx?.showModal();
  };

  const handleToggleStatus = (id: string) => {
    ctx?.toggleStatusTodo(id);
  };

  const handleUpdateTodo = (id: string, title?: string) => {
    ctx?.updateTitleTodo(id, title);
    ctx?.hideModal();
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-500 bg-cover">
      <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col gap-6  p-6">
        <h1 className="rounded-md border-b-2 border-sky-500 pb-6 text-center text-3xl font-light tracking-wide text-zinc-200">
          To-do List
        </h1>
        <div className="flex w-full gap-3">
          <Input
            onKeyUp={handleEnterClick}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="flex items-end justify-end">
            <Button onClick={handleAddTodo} disabled={input.trim() === ""}>
              Adicionar
            </Button>
          </div>
        </div>
        {ctx && ctx.todos.length > 0 && (
          <div className="flex flex-col gap-2">
            <div>
              <small className="block text-end text-zinc-200">
                Total de Tarefas: {ctx?.todos.length}
              </small>
              <small className="block text-end text-zinc-200">
                Tarefas Concluídas: {completed?.length}
              </small>
            </div>
            <div className="flex flex-1 flex-col gap-2 overflow-hidden overflow-y-auto">
              {ctx?.todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  delTodo={handleDeleteTodo}
                  showModal={handleShowModal}
                  toggleStatus={handleToggleStatus}
                />
              ))}
            </div>
          </div>
        )}
        {ctx && ctx.todos.length === 0 && (
          <div className="mt-[20%] text-center text-lg text-zinc-200">
            Nenhuma tarefa cadastrada
          </div>
        )}
      </div>
      {ctx?.modal && modalTodo && (
        <FadeIn>
          <Modal
            hideModal={ctx.hideModal}
            updateTodo={handleUpdateTodo}
            todo={modalTodo}
          />
        </FadeIn>
      )}
    </main>
  );
}

export default App;
