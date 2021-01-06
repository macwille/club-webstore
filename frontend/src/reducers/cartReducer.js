export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    item: item
  }
}
export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    item: item
  }
}
export const clearCart = () => {
  return {
    type: 'CLEAR_CART',
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ITEM':
    return state.concat(action.item)
  case 'REMOVE_ITEM':
    return state.filter(p => p.id === action.item)
  case 'CLEAR_CART':
    return []
  default:
    return state
  }
}

export default cartReducer