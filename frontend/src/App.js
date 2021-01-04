import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import MainHeader from './components/MainHeader'
import MainBody from './components/MainBody'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { useDispatch } from 'react-redux'
import { setLoginUser } from './reducers/loginReducer'

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
    <Container>
      <MainHeader title='Club Webstore' gutterBottom />
      <Navigation />
      <MainBody />
      <Footer />
    </Container>
  )
}

export default App
