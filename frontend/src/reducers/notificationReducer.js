export const setNotification = (message) => {
  return {
    type: 'SET_LOGGED',
    message,
  }
}
export const clearNotification = () => {
  return {
    type: 'CLEAR_LOGGED'
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'CLEAR_LOGGED':
    return null
  case 'SET_LOGGED':
    return action.message
  default:
    return state
  }
}

export default notificationReducer