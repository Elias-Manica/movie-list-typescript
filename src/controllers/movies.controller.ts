import { Request, Response } from "express";

import { listGenres } from "../repositories/movies.repositories.js";

async function listAllGenres(req: Request, res: Response) {
  try {
    const response = await listGenres();
    res.send(response.rows);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { listAllGenres };
