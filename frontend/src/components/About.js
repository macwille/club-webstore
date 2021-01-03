import { Box, Typography, CircularProgress } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import userService from '../services/users'

const About = () => {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    userService
      .getAll()
      .then(initial => { setUsers(initial) })
  }, [])

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