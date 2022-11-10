import express, { Router } from "express";

import { getStatus } from "../controllers/teste.js";

import { tokenIsValid } from "../middleware/auth.middleware.js";

const router: Router = express.Router();

router.get("/movie-status", tokenIsValid, getStatus);

export default router;
