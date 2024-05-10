// inspiration from https://www.youtube.com/watch?v=5zrwR4vqw5M&ab_channel=CodeWithTony

import { forwardRef } from "react";
import { DialogNativeProps } from "@/types";
import { cn } from "@/utils";
import { Box, DualButtons, H1, Separator } from ".";
import { useRouter } from "next/router";
import CloseX from "../../public/images/close-x.svg";

type DialogProps = DialogNativeProps & { closeDialog: () => void };

export const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ children, className, closeDialog, ...props }, ref) => {
    const { push } = useRouter();

    return (
      <dialog
        ref={ref}
        className={cn(
          "w-2/5 animate-fadeIn300ms rounded-lg bg-white p-4 shadow-lg",
          className,
        )}
        {...props}
      >
        <Box>
          <H1>Créer une excuse</H1>

          <Separator />

          <div>{children}</div>

          <Separator />

          <DualButtons
            className="justify-end"
            leftButtonProps={{
              children: <span>Liste des excuses</span>,
              onClick: () => {
                closeDialog();
                push("/excuses");
              },
            }}
            rightButtonProps={{
              onClick: closeDialog,
              children: (
                <span className="flex items-center gap-2">
                  <CloseX className="h-4 w-4" /> Fermer
                </span>
              ),
            }}
          />
        </Box>
      </dialog>
    );
  },
);

Dialog.displayName = "Dialog";
