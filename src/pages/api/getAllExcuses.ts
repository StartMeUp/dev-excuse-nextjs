// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getAllExcuses } from "@/services/prismaClient";
import type { Excuses } from "@/types";

const handler = async (req: NextApiRequest, res: NextApiResponse<Excuses>) => {
  const excuses = await getAllExcuses();
  return res.status(200).json(excuses);
};

export default handler;
