/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';
import { SECRET } from '../config';
import bcrypt from 'bcrypt';
import logger from '../util/logger';
import User from '../models/user';
import jwt from 'jsonwebtoken';

const loginRouter = Router();

loginRouter.post('/', async (req, res) => {
  const body: { username: string, password: string } = req.body;
  const user = await User.findOne({ username: body.username });
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash);

  if (!(user && passwordCorrect)) {
    logger.info('Credentials failed');
    res.status(401).json({
      error: 'Invalid username or password'
    });
  }
  const userForToken = {
    username: user?.username,
    id: user?._id,
  };
  const token = jwt.sign(userForToken, SECRET);

  res.status(200).send({ username: user?.username, id: user?._id, token });
});

export default loginRouter;