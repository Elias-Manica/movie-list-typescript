import connection from "../database/database.js";

import { QueryResult } from "pg";

import { Genres } from "../protocols/movies.protocols.js";

async function listGenres(): Promise<QueryResult<Genres>> {
  const response = await connection.query(`
        SELECT * FROM genres;
    `);
  return response;
}

export { listGenres };
