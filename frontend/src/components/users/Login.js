import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginUser } from '../../reducers/loginReducer'
import { Button, Box, Container, TextField, Typography, Grid } from '@material-ui/core'
import { useField } from '../../hooks/inputFields'
import loginService from '../../services/login'

const Login = () => {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()
  const history = useHistory()

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
      history.push('/')
    } catch (exception) {
      console.log('Exception logging in', exception)
    }
  }
  if (user) {
    return (
      <Container>
        <Typography variant="h6">Already Logged in as: {user}</Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Box pb={8}>
        <Typography variant="h4">Login</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <TextField label="Username" variant="outlined" {...username} clear={null} autoFocus fullWidth required />
            <Button color="primary" onClick={username.clear}>Clear</Button>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" variant="outlined" {...password} clear={null} fullWidth required />
            <Button color="primary" onClick={password.clear}>Clear</Button>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">Login</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Login