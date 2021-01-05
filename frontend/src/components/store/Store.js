import React, { useState, useEffect } from 'react'
import { AppBar, Box, Container, Typography, Tabs, Tab, CircularProgress } from '@material-ui/core'
import productService from '../../services/products'
import ProductForm from './ProductForm'
import Product from './Product'

const TabPanel = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Store = () => {
  const [products, setProducts] = useState(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    productService
      .getAll()
      .then(initial => {
        setProducts(initial)
      })
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <AppBar color="secondary" position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Store" />
          <Tab label="Create" />
        </Tabs>
      </AppBar>
      <Container>
        <TabPanel value={value} index={0}>
          <Box>
            {products ?
              <ul>
                {products.map(p =>
                  <li key={p.id}>
                    <Product product={p} />
                  </li>
                )}
              </ul>
              :
              <CircularProgress />
            }
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          < ProductForm products={products} setProducts={setProducts} />
        </TabPanel>
      </Container>
    </Box >
  )
}

export default Store