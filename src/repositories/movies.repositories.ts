import connection from "../database/database.js";

import { QueryResult } from "pg";

import { Genres, Movie } from "../protocols/movies.protocols.js";

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
    SELECT movies.name, plataforms.name AS "plataform", genres.name AS "genre", status.name AS "status", 
    movies.grade, movies.note FROM movies LEFT JOIN plataforms ON plataforms.id = movies.plataform 
    LEFT JOIN genres ON genres.id = movies.genre LEFT JOIN status ON status.id = movies.statusmovie 
    WHERE movies.userid = $1
    `,
    [userid]
  );
  return response;
}

export { listGenres, listStatus, listPlataforms, listMoviesAvaible };
