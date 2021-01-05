const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  description: String,
  startDate: Date,
  price: Number,
  paricipants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

courseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

courseSchema.plugin(uniqueValidator)

const Course = mongoose.model('Course', courseSchema)

module.exports = Course