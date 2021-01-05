import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Box } from '@material-ui/core'
import Courses from './Courses'
import Store from './store/Store'
import RegisterForm from './users/RegisterForm'
import Login from './users/Login'
import About from './About'

const MainBody = () => {

  return (
    <Box className="main-body-box">
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Box>
  )
}

export default MainBody