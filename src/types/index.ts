import type { Excuse } from "@prisma/client";
import type { ComponentPropsWithoutRef } from "react";

// components types
export type DivNativeProps = ComponentPropsWithoutRef<"div">;
export type H1NativeProps = ComponentPropsWithoutRef<"h1">;
export type ButtonNativeProps = ComponentPropsWithoutRef<"button">;
export type DialogNativeProps = ComponentPropsWithoutRef<"dialog">;

// excuses types
export { Excuse };
export type ExcusePayload = Omit<Excuse, "id">;
export type Excuses = Excuse[];
