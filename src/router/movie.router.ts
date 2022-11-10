import express, { Router } from "express";

import {
  deleteMovie,
  insertMovie,
  listAllGenres,
  listAllPlataforms,
  listAllStatus,
  listMovies,
} from "../controllers/movies.controller.js";

import { tokenIsValid } from "../middleware/auth.middleware.js";

import {
  bodyIsValid,
  hasMovie,
  movieIsValid,
} from "../middleware/movies.middleware.js";

const router: Router = express.Router();

router.get("/genres", listAllGenres);

router.get("/status", listAllStatus);

router.get("/plataforms", listAllPlataforms);

router.get("/movies", tokenIsValid, listMovies);

router.post("/movies", tokenIsValid, movieIsValid, bodyIsValid, insertMovie);

router.delete("/movies/:id", tokenIsValid, hasMovie, deleteMovie);

export default router;
