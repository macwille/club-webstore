import React from 'react'
import { Box, Container, Button, TextField, Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useField } from '../../hooks/inputFields'
import userService from '../../services/users'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginUser } from '../../reducers/loginReducer'

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

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      address: address.value,
      postcode: postcode.value,
      email: email.value,
      password: password.value
    }
    try {
      userService.create(newUser).then(response => {
        console.log('Added user', response)
        dispatch(setLoginUser(response.username))
        history.push('/')
      })
    } catch (error) {
      console.log(error)
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
    <Box>
      <Container>
        <form onSubmit={handleSubmit} autoComplete="off">
          <Typography variant="h4" paragraph>Register</Typography>
          <Typography paragraph={true}>
            <TextField label="Username" variant="outlined" {...username} clear={null} required />
            <Button color="primary" onClick={username.clear}>Clear</Button>
            <TextField label="Password" variant="outlined" {...password} clear={null} required />
            <Button color="primary" onClick={password.clear}>Clear</Button>
            <TextField label="First name" variant="outlined" {...firstname} clear={null} required />
            <Button color="primary" onClick={firstname.clear}>Clear</Button>
            <TextField label="Last name" variant="outlined" {...lastname} clear={null} required />
            <Button color="primary" onClick={lastname.clear}>Clear</Button>
            <TextField label="Address" variant="outlined" {...address} clear={null} />
            <Button color="primary" onClick={address.clear}>Clear</Button>
            <TextField label="Postcode" variant="outlined" {...postcode} clear={null} />
            <Button color="primary" onClick={postcode.clear}>Clear</Button>
            <TextField label="Email" variant="outlined" {...email} clear={null} />
            <Button color="primary" onClick={email.clear}>Clear</Button>
            <Button variant="contained" color="primary" type="submit">Submit</Button>
          </Typography>
        </form>
      </Container>
    </Box>
  )

}

export default RegisterForm