import { Request, Response } from "express";

import { createAccount } from "../repositories/auth.repositories.js";

async function signUp(req: Request, res: Response) {
  try {
    //await createAccount();
    res.status(201).send({ msg: "Account created!" });
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { signUp };
