import { ComponentProps } from "react";



export const IconButton = ({
  children,
  ...props
}: ComponentProps<"button">) => {
  return (
    <button
      {...props}
      className="flex size-7 items-center justify-center rounded-md bg-zinc-200 text-lg text-zinc-900 duration-200 ease-linear hover:bg-sky-500"
    >
      {children}
    </button>
  );
};
