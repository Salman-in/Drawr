import { JWT_SECRET } from "@repo/backend-common/config"
import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(authHeader, JWT_SECRET) as JwtPayload;

    if (decoded) {
        //@ts-ignore
        req.userId = decoded.userId;
        next(); 
    } else {
        res.status(403).json({
            message: "Invalid token"
        });
    }
}