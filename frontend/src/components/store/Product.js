import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cartReducer'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  productCard: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const Product = ({ product }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(addItem(product))
    console.log('Add product to cart:', product)
  }

  return (
    <Card className={classes.productCard}>
      <CardContent>
        <Typography variant="h6">
          {product.name}
        </Typography>
        <Typography >
          {product.euros},{product.cents}€
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product