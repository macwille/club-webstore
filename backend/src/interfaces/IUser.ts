import { Document, Schema } from 'mongoose';

interface IUser extends Document {
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
}

export default IUser;