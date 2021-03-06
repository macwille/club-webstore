const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const logger = require('../util/logger')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

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
  const token = jwt.sign(userForToken, process.env.SECRET)

  response
    .status(200)
    .send({ username: user.username, id: user._id, token })
})

module.exports = loginRouter