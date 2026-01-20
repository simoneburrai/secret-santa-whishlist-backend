import express from "express";
import userRouter from "./routers/authRouter";
import wishlistRouter from "./routers/wishlistRouter"
import cors from 'cors';
import path from "path";
import giftRouter from "./routers/giftRouter";

const PORT : number = Number(process.env.PORT) | 3000;
const app = express();
const corsOptions = {
  // Aggiungi l'URL esatto del tuo frontend Vercel
  origin: [
    'https://secret-santa-wishlist-one.vercel.app', 
    'http://localhost:5173' // per i test locali del frontend
  ],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static('public/uploads'));

app.use("/", userRouter);
app.use("/wishlists/", wishlistRouter);
app.use("/gifts/", giftRouter);


app.listen(PORT, ()=>{
    console.log(`Server Express in ascolto nella porta ${PORT}`);
})
