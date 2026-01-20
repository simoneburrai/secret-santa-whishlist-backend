import express from "express";
import userRouter from "./routers/authRouter";
import wishlistRouter from "./routers/wishlistRouter"
import cors from 'cors';
import path from "path";
import giftRouter from "./routers/giftRouter";

const PORT : number = Number(process.env.PORT) | 3000;
const app = express();


app.use(cors({
  origin: "https://secret-santa-wishlist-one.vercel.app",
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));

app.use("/", userRouter);
app.use("/wishlists/", wishlistRouter);
app.use("/gifts/", giftRouter);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
