import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link as ReactLink } from 'react-router-dom'
import { AppBar, Box, Button, ButtonGroup, Toolbar, Switch } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { clearLoginUser } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'

const Navigation = ({ darkmode, handleDarkmode }) => {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()
  const [checked, setChecked] = useState(darkmode)

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(clearLoginUser())
    dispatch(setNotification('Logged out'))
    window.localStorage.clear()
  }

  const handleSwitch = () => {
    setChecked((prev) => !prev)
    handleDarkmode()
  }
  const renderButtons = () => {
    if (user) {
      return (
        <ButtonGroup>
          <Button component={ReactLink} to="/">Home</Button>
          <Button component={ReactLink} to="/courses">Courses</Button>
          <Button component={ReactLink} to="/store">Store</Button>
          <Button component={ReactLink} to="/account">Account</Button>        
          <Button onClick={handleLogout}>Logout</Button>
        </ButtonGroup>
      )
    }
    return (
      <ButtonGroup>
        <Button component={ReactLink} to="/">Home</Button>
        <Button component={ReactLink} to="/courses">Courses</Button>
        <Button component={ReactLink} to="/store">Store</Button>
        <Button component={ReactLink} to="/login">Login</Button>
        <Button component={ReactLink} to="/register">Register</Button>
      </ButtonGroup>

    )
  }

  return (
    <Box>
      <AppBar color="inherit">
        <Toolbar>
          {renderButtons()}
          <Box>
            <Switch checked={checked} onChange={handleSwitch} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

Navigation.propTypes = {
  darkmode: PropTypes.bool,
  handleDarkmode: PropTypes.func
}

export default Navigation