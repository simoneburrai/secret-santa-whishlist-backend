import express from "express";
import { Request, Response } from "express";
import { query } from "./config/db";
import userRouter from "./routers/authRouter";


const PORT : number = Number(process.env.PORT) | 3000;
const app = express();


app.use(express.json());
app.use("/", userRouter);


app.listen(PORT, ()=>{
    console.log(`Server Express in ascolto nella porta ${PORT}`);
})
