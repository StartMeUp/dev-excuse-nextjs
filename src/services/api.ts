import type { Excuses, Excuse } from "@/types";

export const fetchAllExcuses = async (): Promise<Excuses> => {
  const response = await fetch("/api/getAllExcuses");
  return await response.json();
};

export const fetchOneExcuse = async (
  http_code: Excuse["http_code"],
): Promise<Excuse | null> => {
  const response = await fetch(`/api/getOneExcuse?http_code=${http_code}`);
  return await response.json();
};
