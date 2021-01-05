const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./util/config')
const middleware = require('./util/middleware')
const logger = require('./util/logger')

const usersRouter = require('./controllers/users')
const loginRouter = require('./controllers/login')
const productRouter = require('./controllers/products')

const mongoose = require('mongoose')

logger.info('connecting to Mongoose')

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/products', productRouter)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, 'build', 'index.html'))
})

if (process.env.NODE_ENV === 'test') {
  logger.info('Testing mode detected')
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app