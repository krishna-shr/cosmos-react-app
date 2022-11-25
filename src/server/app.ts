import express, { Application, Request, Response } from 'express';
import path from 'path';
import { NODE_SERVER_PORT, ENVIRONMENT, BASE_PATH } from './config';
import appRoute from './routes/app.route';
import commonMiddleware from './middleware/common.middleware';

const app: Application = express();

app.use('/api/health-check', (_req: Request, res: Response) =>
    res.json({
        status: 'App is up',
    })
);

app.use(express.static('dist'));

commonMiddleware(app);

app.use('/api', appRoute);

app.get(`${BASE_PATH}/*`, (_req, res) => {
    console.log("ola");
    res.sendFile(path.join(__dirname, '..', '..', 'dist/index.html'));
});

app.listen(NODE_SERVER_PORT, () =>
    console.log(
        `App is listening on port ${NODE_SERVER_PORT}!. Running in ${ENVIRONMENT} mode.`
    )
);
