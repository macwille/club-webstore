const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const logger = require('../util/logger')
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('user', { username: 1, firstname: 1 })
  response.json(users.map(map => map.toJSON()))
})

userRouter.post('/', async (request, response) => {
  const body = request.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    firstname: body.firstname,
    lastname: body.lastname,
    address: body.address,
    postcode: body.postcode,
    email: body.email,
    passwordHash: passwordHash,
  })
  const savedUser = await user.save()
  response.json(savedUser)

})

userRouter.put('/:id', (request, response) => {
  const body = request.body

  const user = {
    ...body
  }

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then(updated => {
      response.json(updated.toJSON())
    })
    .catch(error => logger.error(error))
})

module.exports = userRouter