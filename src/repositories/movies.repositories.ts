import connection from "../database/database.js";

import { QueryResult } from "pg";

import {
  Genres,
  JustMovie,
  Movie,
  QtdMovie,
} from "../protocols/movies.protocols.js";

async function listGenres(): Promise<QueryResult<Genres>> {
  const response = await connection.query(`
        SELECT * FROM genres;
    `);
  return response;
}

async function listStatus(): Promise<QueryResult<Genres>> {
  const response = await connection.query(`
          SELECT * FROM status;
      `);
  return response;
}

async function listPlataforms(): Promise<QueryResult<Genres>> {
  const response = await connection.query(`
            SELECT * FROM plataforms;
        `);
  return response;
}

async function listMoviesAvaible(userid: number): Promise<QueryResult<Movie>> {
  const response = await connection.query(
    `
    SELECT movies.id, movies.name, plataforms.name AS "plataform", genres.name AS "genre", status.name AS "status", 
    movies.grade, movies.note FROM movies LEFT JOIN plataforms ON plataforms.id = movies.plataform 
    LEFT JOIN genres ON genres.id = movies.genre LEFT JOIN status ON status.id = movies.statusmovie 
    WHERE movies.userid = $1
    `,
    [userid]
  );
  return response;
}

async function createMovie(
  name: string,
  plataform: number,
  genre: number,
  statusmovie: number,
  userid: number
): Promise<QueryResult> {
  const response = await connection.query(
    `
      INSERT INTO movies (name, plataform, genre, statusmovie, userid) VALUES ($1, $2, $3, $4, $5)
      `,
    [name, plataform, genre, statusmovie, userid]
  );
  return response;
}

async function createMovieWithGrade(
  name: string,
  plataform: number,
  genre: number,
  statusmovie: number,
  grade: number,
  note: string,
  userid: number
): Promise<QueryResult> {
  const response = await connection.query(
    `
        INSERT INTO movies (name, plataform, genre, statusmovie, grade, note, userid) VALUES ($1, $2, $3, $4, $5, $6, $7)
        `,
    [name, plataform, genre, statusmovie, grade, note, userid]
  );
  return response;
}

async function createMovieWithGradeOnly(
  name: string,
  plataform: number,
  genre: number,
  statusmovie: number,
  grade: number,
  userid: number
): Promise<QueryResult> {
  const response = await connection.query(
    `
    INSERT INTO movies (name, plataform, genre, statusmovie, grade, userid) VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [name, plataform, genre, statusmovie, grade, userid]
  );
  return response;
}

async function createMovieWithNoteOnly(
  name: string,
  plataform: number,
  genre: number,
  statusmovie: number,
  note: string,
  userid: number
): Promise<QueryResult> {
  const response = await connection.query(
    `
    INSERT INTO movies (name, plataform, genre, statusmovie, note, userid) VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [name, plataform, genre, statusmovie, note, userid]
  );
  return response;
}

async function genreIsValid(genreid: number): Promise<QueryResult<Genres>> {
  const response = await connection.query(
    `SELECT * FROM genres WHERE id = $1;`,
    [genreid]
  );
  return response;
}

async function statusIsValid(statusid: number): Promise<QueryResult<Genres>> {
  const response = await connection.query(
    `SELECT * FROM status WHERE id = $1;`,
    [statusid]
  );
  return response;
}

async function plataformIsValid(
  plataformid: number
): Promise<QueryResult<Genres>> {
  const response = await connection.query(
    `SELECT * FROM plataforms WHERE id = $1;`,
    [plataformid]
  );
  return response;
}

async function listMovieById(movieId: number): Promise<QueryResult<JustMovie>> {
  const response = await connection.query(
    `SELECT * FROM movies WHERE id = $1;`,
    [movieId]
  );
  return response;
}

async function deleteMovieById(movieId: number): Promise<QueryResult> {
  const response = await connection.query(`DELETE FROM movies WHERE id = $1;`, [
    movieId,
  ]);
  return response;
}

async function updateGrade(
  grade: number,
  movieId: number
): Promise<QueryResult> {
  const response = await connection.query(
    `UPDATE movies SET grade = $1, statusmovie=1 WHERE id = $2`,
    [grade, movieId]
  );
  return response;
}

async function updateNote(note: string, movieId: number): Promise<QueryResult> {
  const response = await connection.query(
    `UPDATE movies SET note = $1, statusmovie=1 WHERE id = $2`,
    [note, movieId]
  );
  return response;
}

async function updateGradeAndNote(
  grade: number,
  note: string,
  movieId: number
): Promise<QueryResult> {
  const response = await connection.query(
    `UPDATE movies SET grade = $1, note=$2, statusmovie=1 WHERE id = $3`,
    [grade, note, movieId]
  );
  return response;
}

async function countMovieByPlataform(): Promise<QueryResult<QtdMovie>> {
  const response = await connection.query(`
    SELECT plataforms.name, COUNT(movies.id) AS "qtd" FROM movies 
    LEFT JOIN plataforms on plataforms.id = movies.plataform 
    GROUP BY plataforms.name
    `);
  return response;
}

async function countMovieByGenre(): Promise<QueryResult<QtdMovie>> {
  const response = await connection.query(`
    SELECT genres.name, COUNT(movies.id) AS "qtd" FROM movies 
    LEFT JOIN genres on genres.id = movies.genre 
    GROUP BY genres.name
      `);
  return response;
}

export {
  listGenres,
  listStatus,
  listPlataforms,
  listMoviesAvaible,
  createMovie,
  genreIsValid,
  statusIsValid,
  plataformIsValid,
  createMovieWithGrade,
  createMovieWithGradeOnly,
  createMovieWithNoteOnly,
  deleteMovieById,
  listMovieById,
  updateGrade,
  updateNote,
  updateGradeAndNote,
  countMovieByPlataform,
  countMovieByGenre,
};
