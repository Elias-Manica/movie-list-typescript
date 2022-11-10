import express, { Router } from "express";

import {
  insertMovie,
  listAllGenres,
  listAllPlataforms,
  listAllStatus,
  listMovies,
} from "../controllers/movies.controller.js";

import { tokenIsValid } from "../middleware/auth.middleware.js";

import { bodyIsValid, movieIsValid } from "../middleware/movies.middleware.js";

const router: Router = express.Router();

router.get("/genres", listAllGenres);

router.get("/status", listAllStatus);

router.get("/plataforms", listAllPlataforms);

router.get("/movies", tokenIsValid, listMovies);

router.post("/movies", tokenIsValid, movieIsValid, bodyIsValid, insertMovie);

export default router;
