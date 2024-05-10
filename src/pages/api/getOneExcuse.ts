import { getOneExcuse } from "@/services/prismaClient";
import { Excuse } from "@/types";
import { NextApiReq, NextApiRes } from "@/types";

const handler = async (req: NextApiReq, res: NextApiRes<Excuse | null>) => {
  const { http_code } = req.query;
  if (req.method !== "GET" || !http_code) return res.status(405).end();
  const excuse = await getOneExcuse(+http_code);
  return res.status(200).json(excuse);
};

export default handler;
