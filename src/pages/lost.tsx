import { useRouter } from "next/router";
import { useEffect } from "react";
import { H1 } from "@/components";
import Image from "next/image";

const Lost = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <>
      <H1 className="text-center">I&apos;m lost</H1>
      <Image src="/images/lost.gif" alt="Lost" width={300} height={300} />
    </>
  );
};

export default Lost;
