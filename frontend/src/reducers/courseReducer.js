import courseService from '../services/courses'

export const getCourses = () => {
  return async dispatch => {
    const courses = await courseService.getAll()
    dispatch({
      type: 'GET_COURSES',
      data: courses,
    })
  }
}

export const addCourse = (course) => {
  return async dispatch => {
    const courses = await courseService.create(course)
    dispatch({
      type: 'ADD_COURSE',
      data: courses
    })
  }
}

export const removeCourse = (id) => {
  return async dispatch => {
    const response = await courseService.remove(id)
    if (response === 204) {
      dispatch({
        type: 'DELETE_COURSE',
        data: id
      })
    }
  }
}

const courseReducer = (state = null, action) => {
  switch (action.type) {
  case 'GET_COURSES':
    return action.data
  case 'ADD_COURSE':
    return state.concat(action.data)
  case 'DELETE_COURSE':
    return state.filter(({ id }) => id === action.data)
  default:
    return state
  }
}

export default courseReducer