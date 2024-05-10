import { cn } from "@/utils";
import type { H1NativeProps } from "@/types";

export const H1 = ({ children, className, ...props }: H1NativeProps) => {
  return (
    <h1
      className={cn("mb-4 animate-fadeIn2s text-2xl font-extrabold", className)}
      {...props}
    >
      {children}
    </h1>
  );
};
