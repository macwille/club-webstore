import React from 'react'
import { TITLE } from '../../config'
import { Helmet } from 'react-helmet'
import { Box, Button, TextField, Typography, Grid, Container } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useField } from '../../hooks/inputFields'
import userService from '../../services/users'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import { setNotification } from '../../reducers/notificationReducer'

const RegisterForm = () => {
  const user = useSelector(state => state.login)
  const dispatch = useDispatch()
  const history = useHistory()

  const username = useField('text')
  const password = useField('password')
  const firstname = useField('text')
  const lastname = useField('text')
  const address = useField('text')
  const postcode = useField('text')
  const email = useField('email')

  const handleClear = (event) => {
    username.clear(event)
    password.clear(event)
    firstname.clear(event)
    lastname.clear(event)
    address.clear(event)
    postcode.clear(event)
    email.clear(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      address: address.value,
      postcode: postcode.value,
      email: email.value,
      password: password.value,
      role: 'customer',
    }
    try {
      userService.create(newUser).then(response => {
        dispatch(login())
        window.localStorage.setItem('loggedUser', JSON.stringify(response))
        history.push('/')
      })
      dispatch(setNotification(`Registered user ${newUser.username}`))
      handleClear(event)
    } catch (error) {
      dispatch(setNotification('Error registering new user'))
      console.log(error)
    }
  }

  if (user) {
    return (
      <Box>
        <Typography variant="h6">{`Already Logged in as: ${user.username}`}</Typography>
      </Box>
    )
  }

  return (
    <Container>
      <Helmet >
        <title>{`Register - ${TITLE}`}</title>
      </Helmet>
      <Box pb={8}>
        <Typography variant="h4">Register</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField label="Username" variant="outlined" {...username} clear={null} autoFocus fullWidth required />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" variant="outlined" {...password} clear={null} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="First name" variant="outlined" {...firstname} clear={null} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField label="Last name" variant="outlined" {...lastname} clear={null} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField label="Address" variant="outlined" {...address} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Postcode" variant="outlined" {...postcode} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" {...email} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button onClick={handleClear} variant="contained" color="light">Clear</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )

}

export default RegisterForm