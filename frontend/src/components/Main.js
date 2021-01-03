import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Container } from '@material-ui/core'
import Courses from './Courses'
import Store from './Store'
import RegisterForm from './RegisterForm'
import Login from './Login'
import About from './About'

const Main = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      setUser(loggedUser)
    }
  }, [])

  return (
    <Container>
      <Switch>
        <Route path="/courses">
          <Courses user={user} />
        </Route>
        <Route path="/store">
          <Store user={user} />
        </Route>
        <Route path="/register">
          <RegisterForm user={user} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login user={user} setUser={setUser} />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Container>
  )
}

export default Main