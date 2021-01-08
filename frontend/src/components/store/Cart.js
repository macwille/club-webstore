import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography } from '@material-ui/core'
import ProductList from './ProductList'

const Cart = () => {
  const products = useSelector(state => state.cart)

  return (
    <Box>
      <Typography variant="h4" paragraph>You have {products.length} items in your cart.</Typography>
      <ProductList products={products} />
    </Box>
  )
}

export default Cart