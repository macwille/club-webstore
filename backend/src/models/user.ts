/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Schema, model } from 'mongoose';
import IUser from 'interfaces/IUser';

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
});

userSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const User = model<IUser>('User', userSchema);

export default User;