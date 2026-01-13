import {createWishlist, getPublicWishlist, deleteWishlist, updateWishlist} from "../controllers/wishlistController";

import { Router } from "express";


const wishlistRouter = Router();

wishlistRouter.post("/", createWishlist);
wishlistRouter.get("/public/:token", getPublicWishlist);
wishlistRouter.delete("/:id", deleteWishlist);
wishlistRouter.put("/:id", updateWishlist);


export default wishlistRouter;