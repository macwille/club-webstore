export const login = () => {
  return {
    type: 'LOGIN',
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}

const loginReducer = (state = false, action) => {
  switch (action.type) {
  case 'LOGIN':
    return true
  case 'LOGOUT':
    return false
  default:
    return state
  }
}

export default loginReducer