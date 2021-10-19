import express from 'express'
import logger from '../util/logger'
import Course from '../models/course'

const courseRouter = express.Router()

courseRouter.get('/', async (request, response) => {
  const courses = await Course.find({}).populate('trainer')
  response.json(courses.map(map => map.toJSON()))
})

courseRouter.post('/', async (request, response) => {
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

courseRouter.put('/:id', (request, response) => {
  const body = request.body

  const course = {
    ...body
  }

  Course.findByIdAndUpdate(request.params.id, course, { new: true })
    .then(updated => {
      response.json(updated.toJSON())
    })
    .catch(error => logger.error(error))
})

courseRouter.delete('/:id', (request, response) => {
  Course.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => logger.error(error))
})

export default courseRouter