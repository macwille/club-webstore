import React, { useEffect } from 'react'
import { Container, ThemeProvider } from '@material-ui/core'
import MainHeader from './components/MainHeader'
import MainBody from './components/MainBody'
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

  console.log('App using theme:', theme)

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainHeader title='Club Webstore' gutterBottom />
        <MainBody />
      </Container>
    </ThemeProvider>
  )
}

export default App
