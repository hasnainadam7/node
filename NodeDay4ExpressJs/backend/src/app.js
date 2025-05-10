//app.js
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import userRouter from "./routes/user_routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);

app.use(bodyParser.json({ limit: "16kb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "2.5mb" }));
app.use(cookieParser());
app.use(express.static("public"));

const apiVersion = process.env.API_VERSION;

app.use(`${apiVersion}/user`, userRouter);

export default app;
