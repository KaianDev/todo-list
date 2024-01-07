import { ComponentProps } from "react";

type ButtonProps = {
  variants?: "secondary";
} & ComponentProps<"button">;

export const Button = ({ children, variants, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`md:text-normal rounded-md border-2 p-2 text-sm uppercase tracking-wide text-zinc-200 duration-300 
      ${
        variants === "secondary"
          ? "border-zinc-500 bg-zinc-500 hover:bg-zinc-900 disabled:border-zinc-300 disabled:bg-zinc-300"
          : "border-sky-500 bg-sky-500 hover:bg-sky-700 disabled:border-sky-300 disabled:bg-sky-300"
      }`}
    >
      {children}
    </button>
  );
};
