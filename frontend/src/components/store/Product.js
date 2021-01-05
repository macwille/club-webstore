import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'

const Product = ({ product }) => {

  return (
    <Box>
      <Typography>
        {product.name}  {product.euros},{product.cents}€
      </Typography>
    </Box>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product