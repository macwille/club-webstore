/**
 * Express router for user login procedure.
 * @module controllers/login
 * @requires express
 */
import bcrypt from 'bcrypt'
import express from 'express'
import logger from '../util/logger'
import User from '../models/user'
import jwt from 'jsonwebtoken'
import { SECRET } from '../util/config'

const loginRouter = express.Router()

loginRouter.post('/', async (request, response) => {
  const body = request.body
  const user = await User.findOne({ username: body.username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(body.password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    logger.info('Credentials failed')
    return response.status(401).json({
      error: 'Invalid username or password'
    })
  }
  const userForToken = {
    username: user.username,
    id: user._id,
  }
  const token = jwt.sign(userForToken, SECRET)

  response
    .status(200)
    .send({ username: user.username, id: user._id, token })
})

export default loginRouter