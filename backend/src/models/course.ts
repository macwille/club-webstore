import { Schema, model, Date } from 'mongoose'
import  uniqueValidator from 'mongoose-unique-validator'

interface ICourse {
  name: string,
  description: string,
  startDate: Date,
  euros: number,
  cents: number,
  maxParticipants: number,
  trainer: Schema.Types.ObjectId,
  participants: Schema.Types.ObjectId,
  toJSON(): any
}

const courseSchema = new Schema<ICourse>({
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
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
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

const Course = model('Course', courseSchema)

export default Course