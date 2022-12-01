import { Response } from 'express';

type Data = Record<string, any>;
type ErrorResponse = {
    error: string;
};

export const sendSuccessResponse = <T>(
    res: Response,
    data: Data
): Response<T> => res.status(200).send(data);

export const sendFailedResponse = (
    res: Response<ErrorResponse>,
    code: number = 500,
    msg = 'Something went wrong'
): Response<ErrorResponse> => {
    if (typeof msg !== 'string') {
        msg = 'Something went wrong';
    }
    return res
        .status(typeof code === 'number' ? code : 500)
        .send({ error: msg });
};
