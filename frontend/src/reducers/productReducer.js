import productService from '../services/products'

export const getProducts = () => {
  return async dispatch => {
    const products = await productService.getAll()
    dispatch({
      type: 'GET_PRODUCTS',
      data: products,
    })
  }
}

export const addProduct = (product) => {
  return async dispatch => {
    const products = await productService.create(product)
    dispatch({
      type: 'ADD_PRODUCT',
      data: products
    })
  }
}
export const removeProduct = (id) => {
  return async dispatch => {
    const response = await productService.remove(id)
    if (response === 204) {
      dispatch({
        type: 'DELETE_PRODUCT',
        data: id
      })
    }
  }
}

const productReducer = (state = null, action) => {
  switch (action.type) {
  case 'GET_PRODUCTS':
    return action.data
  case 'ADD_PRODUCT':
    return state.concat(action.data)
  case 'DELETE_PRODUCT':
    return state.filter(product => product.id === action.data)
  default:
    return state
  }
}

export default productReducer