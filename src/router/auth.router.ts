import express from "express";

import { signUp } from "../controllers/auth.controller.js";

import { schemaSignUp } from "../schemas/auth.schemas.js";

import { hadEmailUnique } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/sign-up", hadEmailUnique, signUp);

export default router;
