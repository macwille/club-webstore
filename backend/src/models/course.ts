/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Schema, model } from 'mongoose';
import ICourse from 'interfaces/ICourse';

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
});

courseSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Course = model<ICourse>('Course', courseSchema);

export default Course;