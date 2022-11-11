import express from "express";
import { signUp, signIn } from "../controllers/auth.controller.js";
import { signUpIsValid, hadEmailUnique, signInIsValid, hadAccount, } from "../middleware/auth.middleware.js";
var router = express.Router();
router.post("/sign-up", signUpIsValid, hadEmailUnique, signUp);
router.post("/sign-in", signInIsValid, hadAccount, signIn);
export default router;
