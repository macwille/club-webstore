import { Link as ReactLink } from 'react-router-dom'
import { AppBar, Box, Button, ButtonGroup, Toolbar } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reducers/loginReducer'
import { setNotification } from '../reducers/notificationReducer'

const Navigation = () => {
  const logged = useSelector(state => state.login)
  const dispatch = useDispatch()

  const handleLogout = (event) => {
    event.preventDefault()
    dispatch(logout())
    dispatch(setNotification('Logged out'))
    window.localStorage.clear()
  }

  const renderButtons = () => {
    if (logged) {
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
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation