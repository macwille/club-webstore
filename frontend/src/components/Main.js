import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Courses from './Courses'
import Store from './Store'
import Register from './Register'
import Login from './Login'
import About from './About'

const Main = () => {

  return (
    <Container>
      <Switch>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Container>
  )
}

export default Main