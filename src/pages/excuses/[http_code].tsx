import { useGetOneExcuse } from "@/hooks/tanstack.hooks";
import { useRouter } from "next/router";
import { AwaitingData, Box } from "@/components";

const Http_code = () => {
  const router = useRouter();
  const { http_code } = router.query as { http_code: string };

  const {
    data: excuse,
    isLoading,
    isError,
    error,
  } = useGetOneExcuse(+http_code);

  if (isLoading || isError || error)
    return (
      <AwaitingData isLoading={isLoading} isError={isError} error={error} />
    );

  if (!excuse) return <Box>Ce code http n&apos;existe pas</Box>;

  return (
    <Box className="bg-slate-200">
      <p>
        http_code: {excuse.http_code}
        <br />
        message: {excuse.message}
        <br />
        tag: {excuse.tag}
      </p>
    </Box>
  );
};

export default Http_code;
