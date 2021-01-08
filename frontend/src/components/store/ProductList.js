import React from 'react'
import PropTypes from 'prop-types'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import ProductCard from './ProductCard'

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
          <Grid key={p.id} item xs={3}>
            <ProductCard product={p} />
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