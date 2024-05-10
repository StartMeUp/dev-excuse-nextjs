import type { Excuse } from "@prisma/client";
import type { ComponentPropsWithoutRef } from "react";
import type { NextApiRequest, NextApiResponse } from "next";

// components types
export type DivNativeProps = ComponentPropsWithoutRef<"div">;
export type H1NativeProps = ComponentPropsWithoutRef<"h1">;
export type ButtonNativeProps = ComponentPropsWithoutRef<"button">;
export type DialogNativeProps = ComponentPropsWithoutRef<"dialog">;

// excuses types
export { Excuse };
export type ExcusePayload = Omit<Excuse, "id">;
export type Excuses = Excuse[];

// NEXT Api types
export type ReqMethod = "GET" | "POST" | "PUT" | "DELETE";
export interface NextApiReq extends NextApiRequest {
  method: ReqMethod;
}
export interface NextApiReqWithBody<BodyType> extends NextApiReq {
  body: BodyType;
}

export type NextApiRes<Data> = NextApiResponse<Data>;
