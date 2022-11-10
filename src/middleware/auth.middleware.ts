import { Request, Response } from "express";

import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";

import {
  hasUserWithEmail,
  selectSpecifyToken,
} from "../repositories/auth.repositories.js";

import { schemaSignUp, schemaSignIn } from "../schemas/auth.schemas.js";

async function signUpIsValid(req: Request, res: Response, next) {
  const isValid = schemaSignUp.validate(req.body, { abortEarly: false });

  if (isValid.error) {
    const error = isValid.error.details.map((erro) => erro.message);
    res.status(422).send(error);
    return;
  }

  next();
}

async function signInIsValid(req: Request, res: Response, next) {
  const isValid = schemaSignIn.validate(req.body, { abortEarly: false });

  if (isValid.error) {
    const error = isValid.error.details.map((erro) => erro.message);
    res.status(422).send(error);
    return;
  }

  next();
}

async function hadEmailUnique(req: Request, res: Response, next) {
  try {
    const email: string = req.body.email;

    const response = await hasUserWithEmail(email);

    const qtdUser: number = response.length;

    if (qtdUser > 0) {
      res.status(409).send({ msg: "E-mail already registered" });
      return;
    }

    const passwordEncrypted: string = bcrypt.hashSync(req.body.password, 12);

    res.locals.passwordEncrypted = passwordEncrypted;

    next();
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function hadAccount(req: Request, res: Response, next) {
  try {
    const email: string = req.body.email;

    const response = await hasUserWithEmail(email);

    const qtdUser: number = response.length;

    if (qtdUser === 0) {
      res.status(401).send({ msg: "E-mail and password incompatible!" });
      return;
    }

    res.locals.response = response[0];

    next();
  } catch (error) {
    res.status(500).send({ msg: "Error in server!" });
  }
}

async function tokenIsValid(req: Request, res: Response, next) {
  try {
    const token: string = req.headers.authorization?.replace("Bearer ", "");

    if (!token) {
      res.status(401).send({ msg: "Token dont send" });
      return;
    }

    if (token.length < 120) {
      res.status(400).send({ msg: "Token invalid" });
      return;
    }

    interface JwtPayload {
      userid: number;
    }

    const { userid } = jwt.verify(token, "palavra_secreta") as JwtPayload;

    if (!userid) {
      res.status(400).send({ msg: "Token invalid" });
      return;
    }

    console.log(userid, " verifytoken");

    const response: {
      id: number;
      userid: number;
      token: string;
      active: boolean;
    }[] = await selectSpecifyToken(userid);

    if (response.length === 0) {
      res.sendStatus(401);
      return;
    }

    next();
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ msg: "Error in server or in the format of token send!" });
  }
}

export {
  hadEmailUnique,
  signUpIsValid,
  signInIsValid,
  hadAccount,
  tokenIsValid,
};
