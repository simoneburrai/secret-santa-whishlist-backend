import { login, registration } from "../controllers/authController";

import { Router } from "express";


const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", registration);


export default userRouter;