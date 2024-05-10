// function that picks a random item from an array

import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type { Excuses, Excuse } from "@/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

const pickRandom = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const randomExcuseMessage = (excuses: Excuses) =>
  pickRandom(excuses).message;

export const generateRandomExcuse = (excuses: Excuses) => {
  const randomDuration = 1000 + Math.floor(Math.random() * 4000);
  console.log(`random duration: ${randomDuration}ms`);
  return new Promise<Excuse["message"]>((resolve) => {
    setTimeout(() => resolve(randomExcuseMessage(excuses)), randomDuration);
  });
};
