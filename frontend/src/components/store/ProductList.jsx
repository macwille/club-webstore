import PropTypes from 'prop-types'
import { Box, CircularProgress, Grid } from '@mui/material'
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
      <Grid container spacing={3} justifyContent="flex-start" alignItems="baseline" direction="row">
        {products.map(p =>
          <Grid key={p.id} item xs={12} sm={3}>
            <ProductCard product={p} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

ProductList.propTypes = {
  products: PropTypes.array
}

export default ProductList