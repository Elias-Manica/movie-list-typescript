import express from "express";
import { deleteMovie, insertMovie, listAllGenres, listAllPlataforms, listAllStatus, listMovies, listMoviesByGenre, listMoviesByPlataform, updateMovie, } from "../controllers/movies.controller.js";
import { tokenIsValid } from "../middleware/auth.middleware.js";
import { bodyIsValid, hasMovie, movieIsValid, updateIsValid, } from "../middleware/movies.middleware.js";
var router = express.Router();
router.get("/genres", listAllGenres);
router.get("/status", listAllStatus);
router.get("/plataforms", listAllPlataforms);
router.get("/movies", tokenIsValid, listMovies);
router.post("/movies", tokenIsValid, movieIsValid, bodyIsValid, insertMovie);
router["delete"]("/movies/:id", tokenIsValid, hasMovie, deleteMovie);
router.put("/movies/:id", tokenIsValid, updateIsValid, hasMovie, updateMovie);
router.get("/movies-plataforms", listMoviesByPlataform);
router.get("/movies-genres", listMoviesByGenre);
export default router;
