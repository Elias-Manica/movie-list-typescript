import { Request, Response } from "express";

import {
  listGenres,
  listStatus,
  listPlataforms,
} from "../repositories/movies.repositories.js";

async function listAllGenres(req: Request, res: Response) {
  try {
    const response = await listGenres();
    res.send(response.rows);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function listAllStatus(req: Request, res: Response) {
  try {
    const response = await listStatus();
    res.send(response.rows);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function listAllPlataforms(req: Request, res: Response) {
  try {
    const response = await listPlataforms();
    res.send(response.rows);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { listAllGenres, listAllStatus, listAllPlataforms };
