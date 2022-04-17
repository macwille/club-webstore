/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */

const requestLogger = (req, _res, next) => {
  console.log('Method:', req.method);
  console.log('Path:  ', req.path);
  console.log('Body:  ', req.body);
  console.log('---');
  next();
};

const errorHandler = (e, _req, res, next) => {
  if (e.name === 'CastError' && e.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (e.name === 'ValidationError') {
    return res.status(400).json({ error: e.message });
  } else if (e.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  }
  next(e);
};

const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: 'unknown endpoint', status: 404 });
};

module.exports = {
  requestLogger,
  errorHandler,
  unknownEndpoint
};