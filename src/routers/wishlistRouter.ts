import {createWishlist, getPublicWishlist} from "../controllers/wishlistController";

import { Router } from "express";


const wishlistRouter = Router();

wishlistRouter.post("/", createWishlist);
wishlistRouter.get("/", getPublicWishlist);


export default wishlistRouter;