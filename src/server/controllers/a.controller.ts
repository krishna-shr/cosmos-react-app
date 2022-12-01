import { Request } from 'express';
import { getDataService } from '../services/a.service';

export const getData = async (req: Request): Promise<any> => {
    const res: any = await getDataService(req.body);
    return res;
};
