/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express';
import bcrypt from 'bcrypt';
import logger from '../util/logger';
import User from '../models/user';

const userRouter = Router();

userRouter.get('/', async (_req, res) => {
  const users = await User.find().populate('courses');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  res.json(users.map(map => map.toJSON()));
});

userRouter.get('/:id', async (req, res) => {
  const user = await User.findOne(req.params.id).populate('courses');
  res.json(user);
});

userRouter.post('/', async (req, res) => {
  const body = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    username: body.username,
    firstname: body.firstname,
    lastname: body.lastname,
    address: body.address,
    postcode: body.postcode,
    email: body.email,
    passwordHash: passwordHash,
    role: body.role,
    courses: body.courses,
    products: body.products,
  });
  const savedUser = await user.save();
  res.json(savedUser);

});

userRouter.put('/:id', (req, res) => {
  const body = req.body;

  const user = {
    ...body
  };

  User.findByIdAndUpdate(req.params.id, user, { new: true })
    .then(updated => {
      res.json(updated?.toJSON());
    })
    .catch(error => console.log(error));
});

userRouter.delete('/:id', (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(e => logger.error(e));
});

export default userRouter;