import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Container, CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Navigation from './components/Navigation'
import MainBody from './components/MainBody'
import Notification from './components/Notification'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { login } from './reducers/loginReducer'
import theme from './theme'


const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      dispatch(login())
    }
  }, [dispatch])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navigation/>
        <Container sx={{paddingTop: 10}}>
          <Notification />
          <MainBody />
          <Footer />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
