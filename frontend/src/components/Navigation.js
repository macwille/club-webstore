import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Box, Button, ButtonGroup, Toolbar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { clearLoginUser } from '../reducers/loginReducer'

const Navigation = () => {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(clearLoginUser())
    window.localStorage.clear()
  }

  return (
    <Box>
      <Toolbar>
        <ButtonGroup>
          <Button component={ReactLink} to="/">Home</Button>
          <Button component={ReactLink} to="/courses">Courses</Button>
          <Button component={ReactLink} to="/store">Store</Button>
          <Button component={ReactLink} to="/login">Login</Button>
          <Button component={ReactLink} to="/register">Register</Button>
          {user && <Button onClick={handleLogout}>Logout</Button>}
        </ButtonGroup>
      </Toolbar>
    </Box>
  )
}

export default Navigation