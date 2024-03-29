import { TITLE } from '../../config'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import { Button, Box, Container, TextField, Typography, Grid } from '@mui/material'
import { useField } from '../../hooks/inputFields'
import loginService from '../../services/login'
import { setNotification } from '../../reducers/notificationReducer'

const Login = () => {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      dispatch(login())
      dispatch(setNotification(`Welcome back ${userObject.username}`))
      navigate('/')
    } catch (exception) {
      console.log('Exception logging in', exception)
      dispatch(setNotification('Wrong username or password'))
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
      <Helmet >
        <title>{`Login - ${TITLE}`}</title>
      </Helmet>
      <Box pb={8}>
        <Typography variant="h4">Login</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} direction="column">
          <Grid item >
            <TextField label="Username" variant="outlined" {...username} clear={null} autoFocus fullWidth required />
            <Button color="primary" tabIndex="-1" onClick={username.clear}>Clear</Button>
          </Grid>
          <Grid item>
            <TextField label="Password" variant="outlined" {...password} clear={null} fullWidth required />
            <Button color="primary" tabIndex="-1" onClick={password.clear}>Clear</Button>
          </Grid>
          <Grid item >
            <Button variant="contained" color="primary" type="submit">Login</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

export default Login