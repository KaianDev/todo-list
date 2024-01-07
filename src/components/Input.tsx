import { ComponentProps } from "react";

export const Input = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      {...props}
      type="text"
      placeholder="Sua tarefa é..."
      autoFocus
      className="flex-1 rounded-md bg-zinc-200 p-1.5 outline-none ring-sky-500 focus:ring-2 md:p-2"
    />
  );
};
