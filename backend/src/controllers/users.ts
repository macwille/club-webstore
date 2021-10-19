import bcrypt from 'bcrypt'
import express from 'express'
import logger from '../util/logger'
import User from '../models/user'

const userRouter = express.Router()

userRouter.get('/', async (request, response) => {
  const users = await User.find(request.params.id).populate('courses')
  response.json(users.map(map => map.toJSON()))
})

userRouter.get('/:id', async (request, response) => {
  const user = await User.findOne({}).populate('courses')
  response.json(user)
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
    role: body.role,
    courses: body.courses,
    products: body.products,
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
    .catch(error => console.log(error))
})

userRouter.delete('/:id', (request, response) => {
  User.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => logger.error(error))
})

export default userRouter