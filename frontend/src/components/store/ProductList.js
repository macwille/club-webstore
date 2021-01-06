import React from 'react'
import PropTypes from 'prop-types'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import Product from './Product'

const ProductList = ({ products }) => {

  if (!products) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Grid container spacing={3} justify="flex-start" alignItems="baseline" direction="row">
        {products.map(p =>
          <Grid key={p.id} item xs={6} sm={3}>
            <Product product={p} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object)
}

export default ProductList