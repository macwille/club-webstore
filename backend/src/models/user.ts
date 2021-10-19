import { Schema, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

interface IUser {
  username: string;
  firstname: string;
  lastname: string;
  address: string;
  postcode: number;
  email: string;
  euros: number;
  cents: number;
  stock: number;
  passwordHash: string;
  role: string;
  courses: Array<Schema.Types.ObjectId>;
  products: Array<Schema.Types.ObjectId>;
  toJSON(): any;
}

const userSchema = new Schema<IUser>({
  username: {
    type: String,
    unique: true
  },
  firstname: String,
  lastname: String,
  address: String,
  postcode: Number,
  email: {
    type: String,
    unique: true
  },
  passwordHash: String,
  role: String,
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course'
    },
  ],
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    },
  ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

userSchema.plugin(uniqueValidator)

const User = model('User', userSchema)

export default User