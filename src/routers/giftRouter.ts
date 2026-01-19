import { reserveGift } from "../controllers/giftController";

import { Router } from "express";


const giftRouter = Router();

giftRouter.patch("/:id", reserveGift);



export default giftRouter;