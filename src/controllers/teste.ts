import { Request, Response } from "express";

import { test } from "../repositories/test.js";

async function getStatus(req: Request, res: Response) {
  const result = await test();
  res.send(result.rows);
}

export { getStatus };
