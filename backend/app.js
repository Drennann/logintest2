import express from "express";
import mongoose from "./db.js";
import userRouter from "./src/routes/User.routes.js";
import authRouter from "./src/routes/Auth.routes.js";
import morgan from "morgan";
import cors from "cors";
import routerCharacter from "./src/routes/Character.routes.js";
import figthRouter from "./src/routes/Fight.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/characters", routerCharacter);
app.use("/api/fight", figthRouter);

export default app;