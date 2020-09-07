import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-error';

import routes from './routes';
import './database';
import uploadConfig from './config/upload';

import AppError from './errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        });
    } else {
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error.'
        });
    }
});

app.listen(3333, () => {
    console.log('--> Server started on port 3333 <--');
});