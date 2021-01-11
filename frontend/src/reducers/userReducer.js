import userService from '../services/users'

export const getUsers = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: 'GET_USERS',
      data: users,
    })
  }
}

export const addUser = (user) => {
  return async dispatch => {
    const users = await userService.create(user)
    dispatch({
      type: 'ADD_USER',
      data: users
    })
  }
}
export const removeUser = (id) => {
  return async dispatch => {
    const response = await userService.remove(id)
    if (response === 204) {
      dispatch({
        type: 'DELETE_USER',
        data: id
      })
    }
  }
}

const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'GET_USERS':
    return action.data
  case 'ADD_USER':    
    return [...state, action.data]
  case 'DELETE_USER':
    return state.filter( ({id}) => id === action.data)
  default:
    return state
  }
}

export default userReducer