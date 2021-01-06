import React, { useEffect } from 'react'
import { TITLE } from '../config'
import { Helmet } from 'react-helmet'
import { Box, Container, Typography, CircularProgress } from '@material-ui/core'
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
      <Helmet >
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        <Typography variant="h4">Users</Typography>
        <ul>

          {renderUsers()}
        </ul>
      </Container >
    </Box >
  )
}

export default About