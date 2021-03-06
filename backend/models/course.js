const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  description: String,
  startDate: Date,
  euros: Number,
  cents: Number,
  maxParticipants: Number,
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
  ]
})

courseSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

courseSchema.plugin(uniqueValidator)

const Course = mongoose.model('Course', courseSchema)

module.exports = Course