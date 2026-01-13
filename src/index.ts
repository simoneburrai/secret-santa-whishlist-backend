import express from "express";
import userRouter from "./routers/authRouter";
import wishlistRouter from "./routers/wishlistRouter"

const PORT : number = Number(process.env.PORT) | 3000;
const app = express();


app.use(express.json());
app.use("/", userRouter);
app.use("/wishlist/", wishlistRouter);


app.listen(PORT, ()=>{
    console.log(`Server Express in ascolto nella porta ${PORT}`);
})
