import {Router} from "express";
import {logIn, register} from "../controllers/authControllers.js"

const authRouter = Router();

authRouter.post("/register", register)
authRouter.post("/login", logIn)

export default authRouter;