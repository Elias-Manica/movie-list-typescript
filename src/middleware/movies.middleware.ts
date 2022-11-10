import { Request, Response, NextFunction } from "express";

import { schemaMovie } from "../schemas/movies.schemas.js";

import {
  genreIsValid,
  listMovieById,
  plataformIsValid,
  statusIsValid,
} from "../repositories/movies.repositories.js";

async function movieIsValid(req: Request, res: Response, next: NextFunction) {
  const isValid = schemaMovie.validate(req.body, { abortEarly: false });

  if (isValid.error) {
    const error = isValid.error.details.map((erro) => erro.message);
    res.status(422).send(error);
    return;
  }

  next();
}

async function bodyIsValid(req: Request, res: Response, next: NextFunction) {
  const plataform: number = req.body.plataform;

  const genre: number = req.body.genre;

  const statusmovie: number = req.body.statusmovie;
  try {
    const responseGenre = await genreIsValid(genre);

    if (responseGenre.rows.length === 0) {
      res.sendStatus(400);
      return;
    }

    const responseStatus = await statusIsValid(statusmovie);

    if (responseStatus.rows.length === 0) {
      res.sendStatus(400);
      return;
    }

    const responsePlataform = await plataformIsValid(plataform);

    if (responsePlataform.rows.length === 0) {
      res.sendStatus(400);
      return;
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function hasMovie(req: Request, res: Response, next: NextFunction) {
  if (!Number(req.params.id)) {
    res.status(400).send({ msg: "Send a valid number!" });
    return;
  }

  const number: number = Number(req.params.id);

  try {
    const response = await listMovieById(number);

    if (response.rows.length === 0) {
      res.sendStatus(404);
      return;
    }

    const userid = res.locals.userid;

    if (response.rows[0].userid !== userid) {
      res
        .status(401)
        .send({ msg: "You dont have acess to delete this movie rate!" });
      return;
    }

    next();
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { movieIsValid, bodyIsValid, hasMovie };
