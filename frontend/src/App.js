import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import Navigation from './components/Navigation'
import MainBody from './components/MainBody'
import Notification from './components/Notification'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { setLoginUser } from './reducers/loginReducer'
import theme from './theme'

const App = () => {
  const dispatch = useDispatch()
  const [darkmode, setDarkmode] = useState(false)

  const useTheme = theme(darkmode)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setLoginUser(loggedUser.username))
    }
  }, [dispatch])

  const handleDarkmode = () => {
    setDarkmode((prev) => !prev)
  }

  return (
    <Router>
      <ThemeProvider theme={useTheme}>
        <CssBaseline />
        <Navigation darkmode={darkmode} handleDarkmode={handleDarkmode} />
        <Container>
          <Notification message="test" />
          <MainBody />
          <Footer />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
