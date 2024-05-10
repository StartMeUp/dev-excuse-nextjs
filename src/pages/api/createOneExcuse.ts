import type {
  NextApiRes,
  NextApiReqWithBody,
  Excuse,
  ExcusePayload,
} from "@/types";
import { createOneExcuse } from "@/services/prismaClient";

const handler = async (
  req: NextApiReqWithBody<ExcusePayload>,
  res: NextApiRes<Excuse>,
) => {
  if (req.method !== "POST") return res.status(405).end();
  const newExcuse = await createOneExcuse(req.body);
  console.log("excuse created", newExcuse);
  return res.status(201).json(newExcuse);
};

export default handler;
