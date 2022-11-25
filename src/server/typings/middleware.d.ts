import { NextFunction, Request, Response } from 'express';

export type Middleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => void;

export interface AppRoute {
    path: string;
    method?: 'POST' | 'GET' | 'PUT' | 'DELETE';
    action: Middleware<unknown>;
    middleware?: Middleware<unknown>[];
}
