import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import RouterTest from "./router/test.js";

const server = express();

server.use(cors());
server.use(express.json());

dotenv.config();

server.get("/status", (req, res) => {
  res.status(200).send({ msg: "tudo ok" });
});

server.use(RouterTest);

server.listen(process.env.PORT, () => {
  console.log(`Server listen on port ${process.env.PORT}`);
});
