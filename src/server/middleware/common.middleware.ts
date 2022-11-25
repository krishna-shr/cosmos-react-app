import morgan from 'morgan';
import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import cors from 'cors';

const commonMiddleware = (app: Application): void => {
    // Lib middleware
    app.use(morgan('combined'));
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ extended: true, limit: '50mb' }));
    app.use(cors({origin:'http://localhost:8082'}))
    app.use(helmet());
};

export default commonMiddleware;
