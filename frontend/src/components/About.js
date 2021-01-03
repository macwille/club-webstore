import { Box, Typography } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import userService from '../services/users'

const About = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    userService
      .getAll()
      .then(initial => { setUsers(initial) })
  }, [])

  return (
    <Box>
      <Typography variant="h4">Users</Typography>
      <ul>
        <Typography>
          {users.map(user =>
            <li key={user.id}>
              {user.username} - {user.firstname} {user.lastname}.
            </li>
          )}
        </Typography>
      </ul>
    </Box>
  )
}

export default About