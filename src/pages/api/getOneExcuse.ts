import { getOneExcuse } from "@/services/prismaClient";
import { Excuse } from "@/types";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Excuse | null>,
) => {
  const { http_code } = req.query;
  const excuse = await getOneExcuse(Number(http_code));
  return res.status(200).json(excuse);
};

export default handler;
