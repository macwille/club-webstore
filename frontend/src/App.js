import React from 'react'
import { Container } from '@material-ui/core'
import MainHeader from './components/MainHeader'
import Main from './components/Main'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const App = () => {
  // window.localStorage.clear()

  return (
    <Container>
      <MainHeader title='Club Webstore' gutterBottom />
      <Navigation />
      <Main />
      <Footer />
    </Container>
  )
}

export default App
