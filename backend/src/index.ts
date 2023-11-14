import app from './app';
import http from 'http';
import { PORT } from './config';
import logger from './util/logger';

const server = http.createServer(app);

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});