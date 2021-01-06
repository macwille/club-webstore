import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Typography, Container } from '@material-ui/core'
import ProductList from './ProductList'

const Cart = () => {
  const products = useSelector(state => state.cart)

  return (
    <Box>
      <Container>
        <Typography variant="h4" paragraph>Your Cart</Typography>
        <Typography>You have {products.length} items in your cart.</Typography>
        <ProductList products={products} />
      </Container>
    </Box>
  )
}

export default Cart