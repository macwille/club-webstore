const productRouter = require('express').Router()
const Product = require('../models/product')

productRouter.get('/', async (request, response) => {
  const products = await Product.find({})
  response.json(products.map(map => map.toJSON()))
})

productRouter.post('/', async (request, response) => {
  const body = request.body

  const product = new Product({
    name: body.name,
    description: body.description,
    euros: body.euros,
    cents: body.cents,
  })
  console.log('Saving product', product)
  const savedProduct = await product.save()
  response.json(savedProduct)

})

module.exports = productRouter