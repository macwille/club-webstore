import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Container, CssBaseline, ThemeProvider } from '@material-ui/core'
import MainHeader from './components/MainHeader'
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { setLoginUser } from './reducers/loginReducer'
import theme from './theme'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setLoginUser(loggedUser.username))
    }
  }, [dispatch])

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <MainHeader gutterBottom />
          <MainBody />
          <Footer />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
