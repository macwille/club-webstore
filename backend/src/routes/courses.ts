/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Router } from 'express';
import logger from '../util/logger';
import Course from '../models/course';

const courseRouter = Router();

courseRouter.get('/', async (_req, res) => {
  const courses = await Course.find({}).populate('trainer');
  res.json(courses.map(map => map.toJSON()));
});

courseRouter.post('/', async (req, res) => {
  const body = req.body;

  const course = new Course({
    name: body.name,
    description: body.description,
    startDate: body.startDate,
    euros: body.euros,
    cents: body.cents,
    maxParticipants: body.maxParticipants,
    trainer: body.trainer
  });
  
  logger.info('Saving course', course);
  const savedCourse = await course.save();
  res.json(savedCourse);
});

courseRouter.put('/:id', (req, res) => {
  const body = req.body;

  const course = {
    ...body
  };

  Course.findByIdAndUpdate(req.params.id, course, { new: true })
    .then(updated => {
      res.json(updated?.toJSON());
    })
    .catch(e => logger.error(e));
});

courseRouter.delete('/:id', (req, res) => {
  Course.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(e => logger.error(e));
});

export default courseRouter;