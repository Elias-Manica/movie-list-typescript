import { Request, Response } from "express";

import { User } from "../protocols/auth.protocols.js";

import jwt from "jsonwebtoken";

import {
  createAccount,
  createSession,
  selectSpecifyToken,
  updateToken,
} from "../repositories/auth.repositories.js";

async function signUp(req: Request, res: Response) {
  try {
    const name: string = req.body.name;
    const email: string = req.body.email;
    const passwordEncrypted: string = res.locals.passwordEncrypted;

    await createAccount(name, email, passwordEncrypted);
    res.status(201).send({ msg: "Account created!" });
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function signIn(req: Request, res: Response) {
  try {
    const response: User = res.locals.response;

    const token: string = jwt.sign(
      {
        userid: response.id,
      },
      "palavra_secreta"
    );

    const hasToken = await selectSpecifyToken(response.id);

    if (hasToken.rows.length === 0) {
      await createSession(response.id, token);

      res.send({ token: `${token}` });
      return;
    }

    await updateToken(token, response.id);

    res.send({ token: `${token}` });
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { signUp, signIn };
