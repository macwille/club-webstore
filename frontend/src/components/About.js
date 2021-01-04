import { Box, Typography, CircularProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initilizeUsers } from '../reducers/userReducer'


const About = () => {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  /*
    useEffect(() => {
      userService
        .getAll()
        .then(initial => { setUsers(initial) })
    }, [])
  */
  useEffect(() => {
    dispatch(initilizeUsers())
  }, [dispatch])

  const renderUsers = () => {
    if (users) {
      return (
        users.map(user =>
          <li key={user.id}>
            <Typography paragraph={true}>
              {user.username} - {user.firstname} {user.lastname} {user.address}.
            </Typography>
          </li>
        )
      )
    }
    return (
      <CircularProgress />
    )
  }

  return (
    <Box>
      <Typography variant="h4">Users</Typography>
      <ul>

        {renderUsers()}
      </ul>
    </Box>
  )
}

export default About