export const setNotification = message => {
  return {
    type: 'SET_NOTIFICAITON',
    message: message
  }
}

export const clearNotification = () => {
  return {
    type: 'CLEAR_NOTIFICATION'
  }
}

const notificationReducer = (state = null, action) => {
  switch (action.type) {
  case 'CLEAR_NOTIFICATION':
    return null
  case 'SET_NOTIFICAITON':
    return action.message
  default:
    return state
  }
}

export default notificationReducer