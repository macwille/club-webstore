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

productRouter.put('/:id', (request, response) => {
  const body = request.body

  const product = {
    ...body
  }

  Product.findByIdAndUpdate(request.params.id, product, { new: true })
    .then(updated => {
      response.json(updated.toJSON())
    })
    .catch(error => logger.error(error))
})

productRouter.delete('/:id', (request, response) => {
  Product.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => logger.error(error))
})

export default productRouter