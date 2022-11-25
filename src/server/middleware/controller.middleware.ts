import { NextFunction, Request, Response } from 'express';
import {
    sendFailedResponse,
    sendSuccessResponse,
} from '../services/utils.service';

export type Middleware<T> = (
    req: Request,
    res: Response,
    next: NextFunction
) => Promise<T>;

/**
 * Description: This is a generic middleware that will be used to handle all
 * controller actions and return a response. controller actions will be return
 * a promise that will be handled by this middleware.
 * Controller action will return data if successful and throw error if failed.
 *
 * const action = () => return { data: 'data' };
 * const errAction = () => throw { error: 'error' };
 */

export const controllerAction =
    (action: Middleware<any>) =>
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
        try {
            const data = await action(req, res, next);
            return sendSuccessResponse(res, data);
        } catch (error: any) {
            const code = error?.response?.status ?? error.code;
            const message =
                error?.response?.data?.message ??
                error?.response?.data?.error ??
                error.msg ??
                error.message ??
                error;
            console.error(`API Request Failed: ${code} - ${message}`);
            return sendFailedResponse(res, code, message);
        }
    };
