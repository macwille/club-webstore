const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  description: String,
  price: Number,
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

module.exports = Product