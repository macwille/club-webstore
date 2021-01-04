import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'
import { useField } from '../hooks/inputFields'
import loginService from '../services/login'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginUser } from '../reducers/loginReducer'

const Login = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.login)

  const username = useField('text')
  const password = useField('password')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const userObject = await loginService.login({
        username: username.value,
        password: password.value,
      })
      localStorage.setItem('token', userObject.token)
      window.localStorage.setItem('loggedUser', JSON.stringify(userObject))
      dispatch(setLoginUser(userObject.username))
    } catch (exception) {
      console.log('Exception logging in', exception)
    }
  }
  if (user) {
    return (
      <Box>
        <Typography variant="h6">Already Logged in as: {user}</Typography>
      </Box>
    )
  }

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      <Box>
        <form onSubmit={handleSubmit}>
          <Typography paragraph={true}>
            Username:<input {...username} clear={null} required />
            <button onClick={username.clear}>Clear</button>
          </Typography>
          <Typography paragraph={true}>
            Password:<input {...password} clear={null} required />
            <button onClick={password.clear}>Clear</button>
          </Typography>
          <button type="submit">Login</button>
        </form>
      </Box>
    </Container >
  )
}

export default Login