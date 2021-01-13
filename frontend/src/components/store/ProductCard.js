import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { addItem } from '../../reducers/cartReducer'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, CardActionArea, Button, Typography } from '@material-ui/core'
import { removeProduct } from '../../reducers/productReducer'
import { setNotification } from '../../reducers/notificationReducer'

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
  const { name, euros, cents } = product

  const euroString = String(euros)
  const centString = cents < 10 ? `0${cents}` : String(cents)

  const handleClick = (event) => {
    event.preventDefault()
    dispatch(addItem(product))
  }

  const handleDelete = () => {
    try {
      dispatch(removeProduct(product.id))
      dispatch(setNotification('Deleted product'))
    } catch (error) {
      dispatch(setNotification('Error deleting product'))
    }
  }

  return (
    <Card className={classes.productCard}>
      <CardContent>
        <Typography variant="h6">
          {name}
        </Typography>
        <Typography >
          {euroString},{centString}€
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardActions>
          <Button color="primary" onClick={handleClick} size="small">Add to Cart</Button>
          <Button color="primary" onClick={handleDelete} size="small">Delete</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

Product.propTypes = {
  product: PropTypes.object,
}

export default Product