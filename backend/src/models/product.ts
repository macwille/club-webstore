/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Document, Schema, model } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  euros: number;
  cents: number;
  stock: number;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    unique: true
  },
  description: String,
  euros: Number,
  cents: Number,
  stock: Number,
});

productSchema.set('toJSON', {
  transform: (_document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  }
});

const Product = model<IProduct>('Product', productSchema);

export default Product;