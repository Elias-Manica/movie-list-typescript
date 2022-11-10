import express, { Router } from "express";

import {
  listAllGenres,
  listAllPlataforms,
  listAllStatus,
} from "../controllers/movies.controller.js";

const router: Router = express.Router();

router.get("/genres", listAllGenres);

router.get("/status", listAllStatus);

router.get("/plataforms", listAllPlataforms);

export default router;
