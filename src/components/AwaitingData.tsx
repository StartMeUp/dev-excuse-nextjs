import { Box } from "./Box";
import type { UseQueryResult } from "@tanstack/react-query";

type AwaitingDataProps = {
  isLoading: UseQueryResult["isLoading"];
  isError: UseQueryResult["isError"];
  error: UseQueryResult["error"];
};

export const AwaitingData = ({
  isLoading,
  isError,
  error,
}: AwaitingDataProps) => {
  if (isLoading || isError || error) {
    if (isLoading) return <Box className="text-center">Chargement ...</Box>;

    if (isError && error)
      return (
        <Box className="text-center">
          Une erreur est survenue: {error.message}
        </Box>
      );
  }

  return null;
};
