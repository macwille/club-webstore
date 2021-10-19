import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const productSchema = mongoose.Schema({
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

const Product = mongoose.model('Product', productSchema)

export default Product