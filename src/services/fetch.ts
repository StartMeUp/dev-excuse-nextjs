import type { Excuses, Excuse, ExcusePayload, ReqMethod } from "@/types";

interface FetchOptions extends RequestInit {
  method: ReqMethod;
}

const fetchClient = async <T>(
  url: string,
  options: FetchOptions = { method: "GET" },
): Promise<T | undefined> => {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const fetchAllExcuses = () => fetchClient<Excuses>("/api/getAllExcuses");

export const fetchOneExcuse = (http_code: Excuse["http_code"]) =>
  fetchClient<Excuse | null>(`/api/getOneExcuse?http_code=${http_code}`);

export const fetchCreateOneExcuse = (newExcuse: ExcusePayload) =>
  fetchClient<Excuse>(`/api/createOneExcuse`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newExcuse),
  });
