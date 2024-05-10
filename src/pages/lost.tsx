// Page affichant "i’m lost" avec un gif au centre de la page. Après 5 secondes, on redirige vers la page d'accueil.

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
