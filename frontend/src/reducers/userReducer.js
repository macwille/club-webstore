import userService from '../services/users'

export const initilizeUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'INIT',
      data: users,
    })
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
  case 'INIT':
    return action.data
  case 'ADD':
    return action.user
  default:
    return state
  }
}

export default userReducer