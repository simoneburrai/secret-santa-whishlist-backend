import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const JWT_SECRET: string = process.env.JWT_SECRET!;

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Il token arriva solitamente nell'header Authorization: Bearer <token>
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ msg: "Accesso negato, token mancante" });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Aggiungiamo i dati dell'utente alla richiesta
        next(); // Passiamo al controller successivo
    } catch (err) {
        res.status(403).json({ msg: "Token non valido o scaduto" });
    }
};


export default authMiddleware;