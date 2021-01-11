export const setLoginUser = (user) => {
  return {
    type: 'SET_LOGGED',
    user,
  }
}

export const clearLoginUser = () => {
  return {
    type: 'CLEAR_LOGGED'
  }
}

const loginReducer = (state = null, action) => {
  switch (action.type) {
  case 'CLEAR_LOGGED':
    return null
  case 'SET_LOGGED':
    return action.user
  default:
    return state
  }
}

export default loginReducer