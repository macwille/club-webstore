import express from 'express'
import path from 'path'
import cors from 'cors'
import { MONGODB_URI } from './util/config'
import middleware from './util/middleware'
import mongoose from 'mongoose'

import * as usersRouter from './controllers/users'
import * as loginRouter from './controllers/login'
import * as productRouter from './controllers/products'
import * as coursesRouter from './controllers/courses'

const app = express()

const connectOptions = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(MONGODB_URI, connectOptions)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())

app.use('/api/users', usersRouter)
app.use('/api/login', loginRouter)
app.use('/api/products', productRouter)
app.use('/api/courses', coursesRouter)

app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', (request, response) => {
  response.sendFile(path.join(__dirname, './build/index.html'), (error) => {
    if (error) {
      response.status(500).send(error)
    }
  })
})

if (process.env.NODE_ENV === 'test') {
  console.log('Testing mode detected')
}

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports=  app