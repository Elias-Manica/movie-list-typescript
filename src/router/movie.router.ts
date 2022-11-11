import express, { Router } from "express";

import {
  deleteMovie,
  insertMovie,
  listAllGenres,
  listAllPlataforms,
  listAllStatus,
  listMovies,
  updateMovie,
} from "../controllers/movies.controller.js";

import { tokenIsValid } from "../middleware/auth.middleware.js";

import {
  bodyIsValid,
  hasMovie,
  movieIsValid,
  updateIsValid,
} from "../middleware/movies.middleware.js";

const router: Router = express.Router();

router.get("/genres", listAllGenres);

router.get("/status", listAllStatus);

router.get("/plataforms", listAllPlataforms);

router.get("/movies", tokenIsValid, listMovies);

router.post("/movies", tokenIsValid, movieIsValid, bodyIsValid, insertMovie);

router.delete("/movies/:id", tokenIsValid, hasMovie, deleteMovie);

router.put("/movies/:id", tokenIsValid, updateIsValid, hasMovie, updateMovie);

export default router;
