/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import express from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
import { MONGODB_URI } from './config';
import middleware from './util/middleware';
import logger from './util/logger';
import usersRouter from './routes/users';
import loginRouter from './routes/login';
import productRouter from './routes/products';
import coursesRouter from './routes/courses';
import mongoose from 'mongoose';

const app = express();

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

logger.info('connecting to Mongoose');

mongoose.connect(MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB');
  })
  .catch((error) => {
    logger.info('error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/products', productRouter);
app.use('/api/courses', coursesRouter);
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'), (error) => {
    if (error) {
      res.status(500).send(error);
    }
  });
});

if (process.env.NODE_ENV === 'test') {
  logger.info('Testing mode detected');
}


export default app;