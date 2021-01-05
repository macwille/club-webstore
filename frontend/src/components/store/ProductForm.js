import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography, Button, TextField } from '@material-ui/core'
import productService from '../../services/products'
import { useField } from '../../hooks/inputFields'

const ProductForm = ({ products, setProducts }) => {
  const name = useField('text')
  const description = useField('text')
  const euros = useField('number')
  const cents = useField('number')

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
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Create new</Typography>
        <Typography paragraph={true}>
          <TextField label="Name" variant="outlined" {...name} clear={null} required />
          <Button color="primary" size="medium" onClick={name.clear}>Clear</Button>
          <TextField label="Description" variant="outlined" {...description} clear={null} required />
          <Button color="primary" size="small" onClick={description.clear}>Clear</Button>
          <TextField label="Euros" variant="outlined" {...euros} clear={null} min="0" required />
          <Button color="primary" size="small" onClick={euros.clear}>Clear</Button>
          <TextField label="Cents" variant="outlined" {...cents} clear={null} min="0" max="99" required />
          <Button color="primary" size="small" onClick={cents.clear}>Clear</Button>
          <Button variant="contained" color="primary" type="submit">Submit</Button>
        </Typography>
      </form>
    </Box>
  )
}

ProductForm.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func
}

export default ProductForm