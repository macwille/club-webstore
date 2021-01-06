export const setNotification = (message, timeout) => {
  return (dispatch) => {
    const timeoutID = setTimeout(
      () => dispatch({ type: 'SET_NOTIFICATION', message: '', timeoutID: null }),
      timeout * 1000
    )
    dispatch({
      type: 'SET_NOTIFICATION',
      message,
      timeoutID,
    })
  }
}

const notificationReducer = (state = {}, action) => {
  if (action.type === 'SET_NOTIFICATION') {
    clearTimeout(state.timeoutID)
    return { message: action.message, timeoutID: action.timeoutID }
  }
  return state
}

export default notificationReducer