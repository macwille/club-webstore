import React from 'react'
import PropTypes from 'prop-types'
import { Box, Typography } from '@material-ui/core'
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
          Name:<input {...name} clear={null} required />
          <button onClick={name.clear}>Clear</button>
          Description:<input {...description} clear={null} required />
          <button onClick={description.clear}>Clear</button>
        </Typography>
        <Typography paragraph={true}>
          Euros:<input {...euros} clear={null} min="0" required />
          <button onClick={euros.clear}>Clear</button>
          Cents:<input {...cents} clear={null} min="0" max="99" required />
          <button onClick={cents.clear}>Clear</button>
        </Typography>
        <button type="submit">Submit</button>
      </form>
    </Box>
  )
}

ProductForm.propTypes = {
  products: PropTypes.array,
  setProducts: PropTypes.func
}

export default ProductForm