import { Request, Response } from "express";

import bcrypt from "bcrypt";

import { hasUserWithEmail } from "../repositories/auth.repositories.js";

async function hadEmailUnique(req: Request, res: Response, next) {
  try {
    const email: string = req.body.email;

    const response = await hasUserWithEmail(email);

    if (response.rows.length > 0) {
      res.status(409).send({ msg: "E-mail already registered" });
      return;
    }

    const passwordEncrypted: string = bcrypt.hashSync(req.body.password, 12);

    console.log(passwordEncrypted);

    next();
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { hadEmailUnique };
