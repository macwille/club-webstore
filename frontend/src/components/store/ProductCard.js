import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cartReducer'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  productCard: {
    minWidth: 260,
    maxWidth: 260,
    minHeight: 300,
    maxHeight: 300,
  }
})

const Product = ({ product }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const euroString = String(product.euros)
  const centString = product.cents < 10 ? `0${product.cents}` : String(product.cents)

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(addItem(product))
  }

  return (
    <Card className={classes.productCard}>
      <CardContent>
        <Typography variant="h6">
          {product.name}
        </Typography>
        <Typography >
          {euroString},{centString}€
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Button color="primary" onClick={handleClick} size="small">Add to Cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product