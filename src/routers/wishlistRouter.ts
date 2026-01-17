import {createWishlist, getPublicWishlist, deleteWishlist, updateWishlist} from "../controllers/wishlistController";

import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware";


const wishlistRouter = Router();

wishlistRouter.post("/", authMiddleware, createWishlist);
wishlistRouter.get("/public/:token", getPublicWishlist);
wishlistRouter.delete("/:id", authMiddleware, deleteWishlist);
wishlistRouter.put("/:id", authMiddleware, updateWishlist);


export default wishlistRouter;