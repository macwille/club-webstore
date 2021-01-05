import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Paper } from '@material-ui/core'
import Courses from './Courses'
import Store from './store/Store'
import RegisterForm from './users/RegisterForm'
import Login from './users/Login'
import About from './About'
import Footer from './Footer'

const MainBody = () => {

  return (
    <Paper className="main-body-box">
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
      <Footer />
    </Paper>
  )
}

export default MainBody