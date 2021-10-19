/**
 * Express router for courses.
 * @module controllers/courses
 * @requires express
 */
import express, { Request, Response } from 'express'
import logger from '../util/logger'
import Course from '../models/course'

const courseRouter = express.Router()

/**
 * Get courses.
 * @route GET /
 */
courseRouter.get('/', async (request: Request, response: Response) => {
  const courses = Course.find({}).populate('trainer')
  response.json(courses.map(map => map.toJSON()))
})

/**
 * Post new course.
 * @route POST /
 */
courseRouter.post('/', async (request: Request, response: Response) => {
  const body = request.body

  const course = new Course({
    name: body.name,
    description: body.description,
    startDate: body.startDate,
    euros: body.euros,
    cents: body.cents,
    maxParticipants: body.maxParticipants,
    trainer: body.trainer
  })
  const savedCourse = await course.save()
  response.json(savedCourse)
})

/**
 * Update course.
 * @route PUT /
 */
courseRouter.put('/:id', (request: Request, response: Response) => {
  const body = request.body

  const course = {
    ...body
  }

  Course.findByIdAndUpdate(request.params.id, course, { new: true })
    .then(updated => {
      if (updated !== null) {
        response.json(updated.toJSON())
      } else {
        response.json(course)
      }
    })
    .catch(error => logger.error(error))
})

/**
 * Remove a course.
 * @route DELETE /
 */
courseRouter.delete('/:id', (request: Request, response: Response) => {
  Course.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => logger.error(error))
})