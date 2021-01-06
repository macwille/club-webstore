const courseRouter = require('express').Router()
const Course = require('../models/course')

courseRouter.get('/', async (request, response) => {
  const courses = await Course.find({}).populate('participants').populate('trainer', { trainer: 1 })
  response.json(courses.map(map => map.toJSON()))
})

courseRouter.post('/', async (request, response) => {
  const body = request.body
  console.log('Create Course', body)

  const course = new Course({
    name: body.name,
    description: body.description,
    startDate: body.startDate,
    euros: body.euros,
    cents: body.cents,
    trainer: body.trainer
  })
  console.log('Saving course', course)
  const savedCourse = await course.save()
  response.json(savedCourse)
})

module.exports = courseRouter