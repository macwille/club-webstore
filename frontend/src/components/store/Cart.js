import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, Typography } from '@material-ui/core'
import ProductList from './ProductList'
import { clearCart } from '../../reducers/cartReducer'

const Cart = () => {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleClear = (event) => {
    event.preventDefault()
    dispatch(clearCart())
  }

  return (
    <Box>
      <Typography variant="h4" paragraph>
        You have {products.length} items in your cart.
        <Button color="primary" onClick={handleClear}>Clear</Button>
      </Typography>
      <ProductList products={products} />
    </Box>
  )
}

export default Cart