import morgan from 'morgan';
import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const commonMiddleware = (app: Application): void => {
    app.use(morgan('combined'));
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    //localhost:8082 is cors because by default webpack dev server is running on 8082
    //change this if you are using any other port than 8082
    app.use(cors({ origin: 'http://localhost:8082', credentials: true }));
    app.use(helmet());
};

export default commonMiddleware;
