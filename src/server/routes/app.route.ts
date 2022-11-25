import { Router } from 'express';
import { controllerAction } from '../middleware/controller.middleware';
import type { AppRoute } from '../typings/middleware';
import a from './a.route';

/*
 * This function will create router for the application.
 * It will handle all the routes for the application.
 * It will also handle the error handling.
 * It will also handle the controller action.
 * It will also handle the middleware.
 */
const createRouter = (routes: AppRoute[]): Router => {
    const router = Router();
    routes.forEach(
        ({ method = 'GET', path, action, middleware = [] }: AppRoute) =>
            router[method?.toLowerCase()](
                path,
                middleware,
                controllerAction(action)
            )
    );
    return router;
};

const router = Router();
router.use('/routeA', createRouter(a));

export default router;
