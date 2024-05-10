import { forwardRef } from "react";
import { DialogNativeProps } from "@/types";
import { cn } from "@/utils";
import { Box, Button } from ".";
import Image from "next/image";

type DialogProps = DialogNativeProps & { closeDialog: () => void };

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, className, closeDialog, ...props }, ref) => {
    return (
      <dialog
        ref={ref}
        className={cn("w-2/5 rounded-lg bg-white p-4 shadow-lg", className)}
        {...props}
      >
        <Box>
          <div className="mb-4 text-right">
            <Button
              className="rounded-full p-2"
              variant="base"
              onClick={closeDialog}
            >
              <Image
                src="/images/close-x.svg"
                alt="Close"
                width={20}
                height={20}
              />
            </Button>
          </div>

          <div>{children}</div>
        </Box>
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";
