// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllExcuses } from "@/services/prismaClient";
import type { Excuses, NextApiReq, NextApiRes } from "@/types";

const handler = async (req: NextApiReq, res: NextApiRes<Excuses>) => {
  if (req.method !== "GET") return res.status(405).end();
  const excuses = await getAllExcuses();
  return res.status(200).json(excuses);
};

export default handler;
