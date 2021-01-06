import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { Container, CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core'
import MainHeader from './components/MainHeader'
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { setLoginUser } from './reducers/loginReducer'

const App = () => {
  const dispatch = useDispatch()
  const [darkmode, setDarkmode] = useState(false)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {
      const loggedUser = JSON.parse(loggedUserJSON)
      dispatch(setLoginUser(loggedUser.username))
    }
  }, [dispatch])

  const handleDarkmode = (event) => {
    event.preventDefault()
    setDarkmode(!darkmode)
  }
  useEffect(() => {
    console.log('Use darkmode?', darkmode)
  }, [darkmode])

  const theme = React.useMemo(
    () => createMuiTheme({
      palette: {
        type: darkmode ? 'dark' : 'light',
      },
    }),
    [darkmode],
  )

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <MainHeader gutterBottom darkmode={darkmode} handleDarkmode={handleDarkmode} />
          <MainBody />
          <Footer />
        </Container>
      </ThemeProvider>
    </Router>
  )
}

export default App
