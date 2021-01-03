const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/user')

userRouter.get('/', async (request, response) => {
  console.log('users get all')
  const users = await User.find({}).populate('user', { username: 1, firstname: 1 })
  response.json(users.map(map => map.toJSON()))
})

userRouter.post('/', async (request, response) => {
  console.log('users post')
  const body = request.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username,
    firstname: body.firstname,
    lastname: body.lastname,
    passwordHash,
  })

  const savedUser = await user.save()

  response.json(savedUser)

})

userRouter.put('/:id', (request, response) => {
  console.log('users get :id')
  const body = request.body

  const user = {
    ...body
  }
  console.log('request user:', user)

  User.findByIdAndUpdate(request.params.id, user, { new: true })
    .then(updated => {
      response.json(updated.toJSON())
    })
    .catch(error => console.log(error))
})

module.exports = userRouter