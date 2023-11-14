import React from 'react'
import { Box } from '@mui/material'
import { useSelector } from 'react-redux'
import UserForm from './UserForm'

const UserPanel = () => {
  const logged = useSelector(state => state.login)

  if (logged) {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    const userObject = JSON.parse(loggedUserJSON)

    return (
      <Box>
        <UserForm id={userObject.id} />
      </Box>

    )
  }
  return (
    <h2>Login or register to edit account information</h2>
  )
}


export default UserPanel