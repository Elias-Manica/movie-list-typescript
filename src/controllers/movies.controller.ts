import { Request, Response } from "express";

import {
  listGenres,
  listStatus,
  listPlataforms,
  listMoviesAvaible,
  createMovie,
  createMovieWithGrade,
  createMovieWithGradeOnly,
  createMovieWithNoteOnly,
  deleteMovieById,
  updateGradeAndNote,
  updateGrade,
  updateNote,
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

    const note: null | string = req.body.note;

    const name: string = req.body.name;

    const plataform: number = req.body.plataform;

    const genre: number = req.body.genre;

    const statusmovie: number = req.body.statusmovie;

    if (!grade && !note && grade !== 0 && statusmovie === 2) {
      await createMovie(name, plataform, genre, statusmovie, userid);
      res.sendStatus(201);

      return;
    }

    if (!note && statusmovie === 1) {
      await createMovieWithGradeOnly(
        name,
        plataform,
        genre,
        statusmovie,
        grade,
        userid
      );
      res.sendStatus(201);

      return;
    }

    if (!grade && grade !== 0 && statusmovie === 1) {
      await createMovieWithNoteOnly(
        name,
        plataform,
        genre,
        statusmovie,
        note,
        userid
      );
      res.sendStatus(201);

      return;
    }

    if ((grade || grade === 0) && note && statusmovie === 1) {
      await createMovieWithGrade(
        name,
        plataform,
        genre,
        statusmovie,
        grade,
        note,
        userid
      );

      res.sendStatus(201);
      return;
    }
    res.status(400).send({ msg: "Watch the movie before rating!" });
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function deleteMovie(req: Request, res: Response) {
  try {
    const number: number = Number(req.params.id);
    await deleteMovieById(number);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function updateMovie(req: Request, res: Response) {
  try {
    const movieid: number = Number(req.params.id);

    const note: string = req.body?.note;
    const grade: number = req.body.grade;

    if ((grade || grade === 0) && note) {
      await updateGradeAndNote(grade, note, movieid);
      res.send(204);

      return;
    }

    if (grade || grade === 0) {
      await updateGrade(grade, movieid);
      res.send(204);

      return;
    }
    await updateNote(note, movieid);

    res.send(204);
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
  deleteMovie,
  updateMovie,
};
