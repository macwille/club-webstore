import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@material-ui/core'
import productService from '../../services/products'
import ProductForm from './ProductForm'
import Product from './Product'

const Store = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    productService
      .getAll()
      .then(initial => {
        setProducts(initial)
      })
  }, [])

  return (
    <Box>
      <Typography variant="h4">Store</Typography>
      <ul>
        {products.map(p =>
          <li key={p.id}>
            <Product product={p} />
          </li>
        )}
      </ul>
      <ProductForm products={products} setProducts={setProducts} />
    </Box>
  )
}

export default Store