import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useField } from '../hooks/inputFields'

const Login = () => {
  const username = useField('text')
  const password = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    const user = {
      username: username.value,
      password: password.value
    }
    console.log('Login:', user)
  }

  return (
    <Box>
      <Typography variant="h4">Login</Typography>
      <Typography>
        <form onSubmit={handleSubmit}>
          <p>
            Username:<input {...username} clear={null} />
            <button onClick={username.clear}>Clear</button>
          </p>
          <p>
            Password:<input {...password} clear={null} />
            <button onClick={password.clear}>Clear</button>
          </p>
          <button type="submit">Login</button>
        </form>
      </Typography>
    </Box>
  )
}

export default Login