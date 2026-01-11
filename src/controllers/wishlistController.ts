import { Response, Request, NextFunction } from "express";
import pool from "../config/db";
import type { Wishlist, Gift } from "../types";

async function createWishlist(req: Request, res: Response, _next: NextFunction){

    const wishlist: Wishlist = req.body;
    const { name, gifts, userId } = wishlist;

    if(!userId){
        res.status(400).json({msg: "Errore Creazione Wishlist: Errore attribuzione proprietario"});
        return;
    }
    if(!name || !(name.trim())){
        res.status(400).json({msg: "Errore creazione Wishlist: Inserire un nome valido"});
        return;
    }
    if(!gifts || gifts.length <= 0){
        res.status(400).json({msg: "Errore creazione Wishlist: Inserire almeno un regalo valido"});
        return;
    }

    try {
         const newWishlist = await pool.query(
        `INSERT INTO wishlists (name, user_id)  VALUES ($1, $2) RETURNING id, name, created_at, share_token`, [name, userId]);

        if(!newWishlist){
            throw new Error("Database Error: Creazione Wishlist non avvenuta");
        }

        if(newWishlist.rowCount && newWishlist.rowCount > 0){
            res.status(201).json({msg: "Creazione Wishlist avvenuta con successo", wishlist: newWishlist.rows[0]})
            return;
        }else {
            throw new Error("Il database non ha confermato l'inserimento");
        }

        const wishlistId = newWishlist.rows[0].id;
        

    } catch (error) {
            console.error(error);
            res.status(500).json({msg: "Database Error: Creazione Wishlist non avvenuta"})
            return;
    }
   

    }
    



export {
    createWishlist
}