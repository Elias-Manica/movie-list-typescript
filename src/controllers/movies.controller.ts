import { Request, Response } from "express";

import {
  listGenres,
  listStatus,
  listPlataforms,
  listMoviesAvaible,
  createMovie,
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

async function listMovies(req: Request, res: Response) {
  try {
    const userid: number = res.locals.userid;
    const response = await listMoviesAvaible(userid);
    res.send(response.rows);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function insertMovie(req: Request, res: Response) {
  try {
    const userid: number = res.locals.userid;

    const grade: null | number = req.body.grade;

    const name: string = req.body.name;

    const plataform: number = req.body.plataform;

    const genre: number = req.body.genre;

    const statusmovie: number = req.body.statusmovie;

    if (!grade) {
      await createMovie(name, plataform, genre, statusmovie, userid);
      res.send(201);
      return;
    }

    //fazer caso a pessoa já mande com nota

    res.send(200);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export {
  listAllGenres,
  listAllStatus,
  listAllPlataforms,
  listMovies,
  insertMovie,
};
