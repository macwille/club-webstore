import { Box, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useField } from '../hooks/inputFields'

const RegisterForm = () => {
  const username = useField('text')
  const password = useField('text')
  const firstname = useField('text')
  const lastname = useField('text')
  const address = useField('text')
  const postcode = useField('text')
  const email = useField('text')

  useEffect(() => {
    if (username && username.value.length > 2) {
      console.log(`Check: ${username.value}`)
    }
  }, [username])

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: username.value,
      firstname: firstname.value,
      lastname: lastname.value,
      address: address.value,
      postcode: postcode.value,
      email: email.value,
      password: password.value
    }

    console.log('Submit:', user)
  }

  return (
    <Box>
      <Typography variant="h4">Register</Typography>
      <Typography>
        <form onSubmit={handleSubmit}>
          <p>
            Username:<input {...username} clear={null} />
            <button onClick={username.clear}>Clear</button>
          Password:<input {...password} clear={null} />
            <button onClick={password.clear}>Clear</button>
          </p>
          <p>
            First name:<input {...firstname} clear={null} />
            <button onClick={firstname.clear}>Clear</button>
          Last name:<input {...lastname} clear={null} />
            <button onClick={lastname.clear}>Clear</button>
          </p>
          <p>
            Address:<input {...address} clear={null} />
            <button onClick={address.clear}>Clear</button>
          Postcode:<input {...postcode} clear={null} />
            <button onClick={postcode.clear}>Clear</button>
          </p>
          <p>
            Email:<input {...email} clear={null} />
            <button onClick={email.clear}>Clear</button>
          </p>
          <button type="submit">Submit</button>
        </form>
      </Typography>
    </Box>
  )

}

export default RegisterForm