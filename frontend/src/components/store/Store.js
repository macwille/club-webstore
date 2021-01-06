import React, { useState, useEffect } from 'react'
import { TITLE } from '../../config'
import { Helmet } from 'react-helmet'
import { AppBar, Box, Typography, Tabs, Tab } from '@material-ui/core'
import productService from '../../services/products'
import ProductForm from './ProductForm'
import ProductList from './ProductList'
import Cart from './Cart'

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
      <Helmet >
        <title>Store - {TITLE}</title>
      </Helmet>
      <AppBar color="primary" position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Store" />
          <Tab label="Create" />
          <Tab label="Cart" />
        </Tabs>
      </AppBar>
      <Box p={3} pt={8}>
        <TabPanel value={value} index={0}>
          <ProductList products={products} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          < ProductForm products={products} setProducts={setProducts} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Cart />
        </TabPanel>
      </Box>
    </Box >
  )
}

export default Store