import React from 'react'
import PropTypes from 'prop-types'
import { Container, Box, Button, TextField, Grid } from '@material-ui/core'
import productService from '../../services/products'
import { useField } from '../../hooks/inputFields'
import { useDispatch } from 'react-redux'
import { setNotification } from '../../reducers/notificationReducer'

const ProductForm = ({ products, setProducts }) => {
  const dispatch = useDispatch()
  const name = useField('text')
  const description = useField('text')
  const euros = useField('number')
  const cents = useField('number')

  const handleClear = (event) => {
    name.clear(event)
    description.clear(event)
    euros.clear(event)
    cents.clear(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newProduct = {
      name: name.value,
      description: description.value,
      euros: euros.value,
      cents: cents.value
    }
    try {
      productService.create(newProduct).then(response => {
        console.log('Added product', response)
        setProducts(products.concat(response))
      })
      dispatch(setNotification(`Added product ${newProduct.name}`))
      handleClear(event)
    } catch (error) {
      dispatch(setNotification('Error adding new product'))
      console.log(error)
    }
  }

  return (
    <Box>
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField label="Name" variant="outlined" {...name} clear={null} autoFocus fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Description" variant="outlined" {...description} clear={null} fullWidth required />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField label="Euros" variant="outlined" {...euros} clear={null} InputProps={{ inputProps: { min: 0 } }} required />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField label="Cents" variant="outlined" {...cents} clear={null} InputProps={{ inputProps: { min: 0, max: 99 } }} required />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="primary" type="submit">Create</Button>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button variant="contained" color="light" onClick={handleClear}>Clear</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

ProductForm.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func
}

export default ProductForm