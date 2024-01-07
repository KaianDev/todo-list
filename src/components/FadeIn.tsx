import { ComponentProps } from "react";

export const FadeIn = ({ children }: ComponentProps<"div">) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-30 flex items-center justify-center bg-black/50">
      {children}
    </div>
  );
};
