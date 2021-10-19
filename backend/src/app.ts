import express, { Request, Response } from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from "body-parser";
import { MONGODB_URI } from './util/config'
import logger from './src/util/logger'
import middleware from './src/util/middleware'
import mongoose from 'mongoose'


import * as usersRouter from './controllers/users'
import * as loginRouter from './controllers/login'
import * as productRouter from './controllers/products'
import * as coursesRouter from './controllers/courses'
logger.info('connecting to Mongoose')

const app = express()

const options = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGODB_URI, options as mongoose.ConnectOptions)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error: Error) => {
    logger.info('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(bodyParser.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/products', productRouter)
app.use('/api/courses', coursesRouter)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, './build/index.html'), (error) => {
    if (error) {
      response.status(500).send(error)
    }
  })
})

if (process.env.NODE_ENV === 'test') {
  logger.info('Testing mode detected')
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

export default app