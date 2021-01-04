import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container, Box } from '@material-ui/core'
import Courses from './Courses'
import Store from './Store'
import RegisterForm from './RegisterForm'
import Login from './Login'
import About from './About'

const MainBody = () => {

  return (
    <Box className="main-body-box">
      <Container>
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
      </Container>
    </Box>
  )
}

export default MainBody