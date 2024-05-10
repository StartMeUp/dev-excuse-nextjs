import {
  fetchAllExcuses,
  fetchOneExcuse,
  fetchCreateOneExcuse,
} from "@/services/api";
import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";
import { Excuse, ExcusePayload } from "@/types";

export const useGetAllExcuses = () => {
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

export const useCreateOneExcuse = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: (newExcuse: ExcusePayload) => fetchCreateOneExcuse(newExcuse),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["excuses"] });
    },
  });
};
