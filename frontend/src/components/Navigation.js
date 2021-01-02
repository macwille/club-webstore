import React from 'react'
import { Link as ReactLink } from 'react-router-dom'
import { Button, Toolbar } from '@material-ui/core'


const Navigation = () => {

  return (
    <Toolbar>
      <Button component={ReactLink} to="/">Home</Button>
      <Button component={ReactLink} to="/courses">Courses</Button>
      <Button component={ReactLink} to="/store">Store</Button>
      <Button component={ReactLink} to="/login">Login</Button>
      <Button component={ReactLink} to="/register">Register</Button>
    </Toolbar>
  )
}

export default Navigation