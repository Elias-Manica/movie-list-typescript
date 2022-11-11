import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import RouterAuth from "./router/auth.router.js";
import RouterMovies from "./router/movie.router.js";

const server = express();

server.use(cors());
server.use(express.json());

dotenv.config();

server.use(RouterAuth);
server.use(RouterMovies);

server.listen(process.env.PORT, () => {
  console.log(`Server listen on port ${process.env.PORT}`);
});
