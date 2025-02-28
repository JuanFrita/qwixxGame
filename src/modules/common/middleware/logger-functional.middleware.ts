import { Request, Response, NextFunction } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
    console.log(`All app request... ${req.baseUrl} : ${JSON.stringify(req.toArray())}`);
    next();
}
