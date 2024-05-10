import { useGetExcuses } from "@/hooks/tanstack.hooks";
import { AwaitingData } from "@/components/AwaitingData";
import { Box, H1 } from "@/components";
import Link from "next/link";

const Excuses = () => {
  const { data: excuses, isLoading, isError, error } = useGetExcuses();

  if (isLoading || isError || error)
    return (
      <AwaitingData isLoading={isLoading} isError={isError} error={error} />
    );

  if (!excuses || excuses.length === 0)
    return <Box>Aucune excuse à lister</Box>;

  return (
    <>
      <H1>Liste des excuses</H1>
      <Box className="text-left">
        {excuses.length === 0 ? (
          <p>Aucune excuse à lister</p>
        ) : (
          <ul>
            {excuses.map((excuse) => (
              <li key={excuse.id}>
                <Link
                  href={`/excuses/${excuse.http_code}`}
                  className="text-blue-500 underline"
                >
                  {excuse.http_code}
                </Link>{" "}
                - {excuse.message}
              </li>
            ))}
          </ul>
        )}
      </Box>
    </>
  );
};

export default Excuses;
