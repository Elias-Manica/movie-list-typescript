import express, { Router } from "express";

import { signUp, signIn } from "../controllers/auth.controller.js";

import {
  signUpIsValid,
  hadEmailUnique,
  signInIsValid,
  hadAccount,
} from "../middleware/auth.middleware.js";

const router: Router = express.Router();

router.post("/sign-up", signUpIsValid, hadEmailUnique, signUp);

router.post("/sign-in", signInIsValid, hadAccount, signIn);

export default router;
