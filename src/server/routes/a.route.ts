import {
    getData
} from '../controllers/a.controller';
import type { AppRoute } from '../typings/middleware';

export const routes: AppRoute[] = [
    {
        path: '/getData',
        method: 'GET',
        action: getData,
    },
];

export default routes;
