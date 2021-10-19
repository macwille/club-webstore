import { Schema, model } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

interface IProduct {
  name: string;
  description: string;
  euros: number;
  cents: number;
  stock: number;
  toJSON(): any;
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
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete returnedObject.passwordHash
  }
})

productSchema.plugin(uniqueValidator)

const Product = model('Product', productSchema)

export default Product