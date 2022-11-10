import { Request, Response } from "express";

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
    console.log(error);
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function signIn(req: Request, res: Response) {
  try {
    const response: {
      id: number;
      name: string;
      email: string;
      password: string;
    } = res.locals.response;

    const token: string = jwt.sign(
      {
        userid: response.id,
      },
      "palavra_secreta"
    );

    const hasToken: {
      id: number;
      userid: number;
      token: string;
      active: boolean;
    }[] = await selectSpecifyToken(response.id);

    console.log(hasToken);

    if (hasToken.length === 0) {
      await createSession(response.id, token);

      res.send({ token: `${token}` });
      return;
    }

    await updateToken(token, response.id);

    res.send({ token: `${token}` });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Error in server!" });
  }
}

export { signUp, signIn };
