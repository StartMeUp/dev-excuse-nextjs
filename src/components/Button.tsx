// components/button.ts
import { cva, cx, type VariantProps } from "class-variance-authority";
import { ButtonNativeProps, DivNativeProps } from "@/types";
import { cn } from "@/utils";

const button = cva("rounded-lg px-4 py-2 font-bold", {
  variants: {
    variant: {
      base: "border",
      primary: "bg-blue-500 text-white",
      secondary: "bg-white text-blue-500 border border-blue-500",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

type ButtonProps = ButtonNativeProps & VariantProps<typeof button>;

export const Button = ({ className, variant, ...props }: ButtonProps) => {
  return <button className={cn(button({ variant }), className)} {...props} />;
};

type DualButtonsProps = {
  leftButtonProps: ButtonNativeProps;
  rightButtonProps: ButtonNativeProps;
} & DivNativeProps;

export const DualButtons = ({
  leftButtonProps,
  rightButtonProps,
  className: divClassName,
  ...divProps
}: DualButtonsProps) => {
  return (
    <div
      className={cn("flex justify-center gap-4", divClassName)}
      {...divProps}
    >
      <Button variant="primary" {...leftButtonProps} />
      <Button variant="secondary" {...rightButtonProps} />
    </div>
  );
};
