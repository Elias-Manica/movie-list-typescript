import express from "express";

import { getStatus } from "../controllers/teste.js";

const router = express.Router();

router.get("/movie-status", getStatus);

export default router;
