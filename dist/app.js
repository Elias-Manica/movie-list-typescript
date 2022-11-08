import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import RouterTest from "./router/test.js";
var server = express();
server.use(cors());
server.use(express.json());
dotenv.config();
server.get("/status", function (req, res) {
    res.status(200).send({ msg: "tudo ok" });
});
server.use(RouterTest);
server.listen(process.env.PORT, function () {
    console.log("Server listen on port ".concat(process.env.PORT));
});
