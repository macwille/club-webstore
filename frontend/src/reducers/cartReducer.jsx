export const addItem = (item) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    item: item
  }
}

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
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
  case 'ADD_ITEM_TO_CART':
    return state.concat(action.item)
  case 'REMOVE_ITEM_FROM_CART':
    return state.filter(p => p.id === action.item)
  case 'CLEAR_CART':
    return []
  default:
    return state
  }
}

export default cartReducer