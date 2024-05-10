import { fetchAllExcuses, fetchOneExcuse } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { Excuse } from "@/types";

export const useGetExcuses = () => {
  return useQuery({
    queryKey: ["excuses"],
    queryFn: () => fetchAllExcuses(),
  });
};

export const useGetOneExcuse = (http_code: Excuse["http_code"]) => {
  return useQuery({
    queryKey: ["excuses", http_code],
    queryFn: () => fetchOneExcuse(Number(http_code)),
    enabled: !!http_code,
  });
};
