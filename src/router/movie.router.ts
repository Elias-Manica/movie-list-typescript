import express, { Router } from "express";

import {
  listAllGenres,
  listAllPlataforms,
  listAllStatus,
  listMovies,
} from "../controllers/movies.controller.js";

import { tokenIsValid } from "../middleware/auth.middleware.js";

const router: Router = express.Router();

router.get("/genres", listAllGenres);

router.get("/status", listAllStatus);

router.get("/plataforms", listAllPlataforms);

router.get("/movies", tokenIsValid, listMovies);

export default router;
