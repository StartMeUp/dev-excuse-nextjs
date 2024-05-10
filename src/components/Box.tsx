import type { DivNativeProps } from "@/types";
import { cn } from "@/utils";

export const Box = ({ children, className }: DivNativeProps) => {
  return (
    <div className={cn("max-w-xl rounded-lg border p-6", className)}>
      {children}
    </div>
  );
};
