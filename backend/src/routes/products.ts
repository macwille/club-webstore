/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { Router } from 'express';
import logger from '../util/logger';
import Product from '../models/product';

const productRouter = Router();

productRouter.get('/', async (_req, res) => {
  const products = await Product.find({});
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  res.json(products.map(map => map.toJSON()));
});

productRouter.post('/', async (req, res) => {
  const body = req.body;

  const product = new Product({
    name: body.name,
    description: body.description,
    euros: body.euros,
    cents: body.cents,
  });

  logger.info('Saving product', product);
  const savedProduct = await product.save();
  res.json(savedProduct);
});

productRouter.put('/:id', (req, res) => {
  const body = req.body;

  const product = {
    ...body
  };

  Product.findByIdAndUpdate(req.params.id, product, { new: true })
    .then(updated => {
      res.json(updated?.toJSON());
    })
    .catch(error => logger.error(error));
});

productRouter.delete('/:id', (req, res) => {
  Product.findByIdAndRemove(req.params.id)
    .then(() => {
      res.status(204).end();
    })
    .catch(error => logger.error(error));
});

export default productRouter;