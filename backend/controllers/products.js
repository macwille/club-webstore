const productRouter = require('express').Router()
const logger = require('../util/logger')
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
  logger.info('Saving product', product)
  const savedProduct = await product.save()
  response.json(savedProduct)

})

module.exports = productRouter