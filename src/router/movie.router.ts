import express, { Router } from "express";

import { listAllGenres } from "../controllers/movies.controller.js";

const router: Router = express.Router();

router.get("/genres", listAllGenres);

export default router;
