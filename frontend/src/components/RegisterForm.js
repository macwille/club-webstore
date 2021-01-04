import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useField } from '../hooks/inputFields'
import userService from '../services/users'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginUser } from '../reducers/loginReducer'

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
      <Typography variant="h4">Register</Typography>
      <form onSubmit={handleSubmit}>
        <Typography paragraph={true}>
          Username:<input {...username} clear={null} required />
          <button onClick={username.clear}>Clear</button>
          Password:<input {...password} clear={null} required />
          <button onClick={password.clear}>Clear</button>
        </Typography>
        <Typography paragraph={true}>
          First name:<input {...firstname} clear={null} required />
          <button onClick={firstname.clear}>Clear</button>
          Last name:<input {...lastname} clear={null} required />
          <button onClick={lastname.clear}>Clear</button>
        </Typography>
        <Typography paragraph={true}>
          Address:<input {...address} clear={null} />
          <button onClick={address.clear}>Clear</button>
          Postcode:<input {...postcode} clear={null} />
          <button onClick={postcode.clear}>Clear</button>
        </Typography>
        <Typography paragraph={true}>
          Email:<input {...email} clear={null} required />
          <button onClick={email.clear}>Clear</button>
        </Typography>
        <button type="submit">Submit</button>
      </form>
    </Box>
  )

}

export default RegisterForm