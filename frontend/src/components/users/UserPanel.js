import { Box } from '@material-ui/core'
import React from 'react'
import UserForm from './UserForm'

const UserPanel = () => {
  const loggedUserJSON = window.localStorage.getItem('loggedUser')

  if (loggedUserJSON) {
    const userObject = JSON.parse(loggedUserJSON)

    return (
      <Box>
        <UserForm user={userObject.id} />
      </Box>

    )
  }
  return (
    <h2>Login or register to edit account information</h2>
  )
}


export default UserPanel