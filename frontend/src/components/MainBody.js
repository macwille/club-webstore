import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import MainHeader from './MainHeader'
import Courses from './courses/Courses'
import Store from './store/Store'
import RegisterForm from './users/RegisterForm'
import Login from './users/Login'
import About from './About'

const useStyles = makeStyles({
  mainBody: {
    minHeight: '80em',
    marginTop: '6em',
  }
})

const MainBody = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.mainBody}>
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
          <MainHeader />
          <About />
        </Route>
      </Switch>
    </Paper>
  )
}

export default MainBody