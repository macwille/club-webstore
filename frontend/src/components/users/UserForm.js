import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, TextField, Typography, Grid, Container, CircularProgress, InputLabel, NativeSelect } from '@material-ui/core'
import { useField } from '../../hooks/inputFields'
import { updateUser, getUsers } from '../../reducers/userReducer'
import { setNotification } from '../../reducers/notificationReducer'

const UserForm = data => {
  const id = data.id
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const [user, setUser] = useState(null)
  const [selectedRole, setSelected] = useState('')
  const username = useField('text')
  const firstname = useField('text')
  const lastname = useField('text')
  const address = useField('text')
  const postcode = useField('text')
  const email = useField('email')

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  useEffect(() => {
    if (users) {
      setUser(users.find(u => u.id === id))
    }
  }, [users])

  useEffect(() => {
    if (user) {
      setSelected(user.role)
    }
  }, [users])

  const handleClear = (event) => {
    username.clear(event)
    firstname.clear(event)
    lastname.clear(event)
    address.clear(event)
    postcode.clear(event)
    email.clear(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      username: username.value.length > 0 ? username.value : user.username,
      firstname: firstname.value.length > 0 ? firstname.value : user.firstname,
      lastname: lastname.value.length > 0 ? lastname.value : user.lastname,
      address: address.value.length > 0 ? address.value : user.address,
      postcode: postcode.value.length > 0 ? Number(postcode.value) : user.postcode,
      email: email.value.length > 0 ? email.value : user.email,
      role: selectedRole.length > 0 ? selectedRole : user.role,
    }
    try {
      dispatch(updateUser(id, newUser))
      dispatch(setNotification(`Edited user ${newUser.username}`))

    } catch (error) {
      dispatch(setNotification('Error eiditing user'))
      console.log(error)
    }
  }

  const handleSelected = (event) => {
    setSelected(event.target.value)
  }

  if (!user) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Container>
      <Box pb={4}>
        <Typography variant="h4" paragraph>Update Account Information</Typography>
        <Typography variant="h6">Name: {user.firstname} {user.lastname}</Typography>
        <Typography variant="h6">Address: {user.address} {user.postcode}</Typography>
        <Typography variant="h6">Email: {user.email}</Typography>
        <Typography variant="h6">Account: {user.role}</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="subtitle1" paragraph>Empty fields will not be updated</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" paragraph>Username: {user.username}</Typography>
            <TextField label="New Username" variant="outlined" {...username} clear={null} autoFocus fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="h6" paragraph>First name: {user.firstname}</Typography>
            <TextField label="New First Name" variant="outlined" {...firstname} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Typography variant="h6" paragraph>Last name: {user.lastname}</Typography>
            <TextField label="New last Name" variant="outlined" {...lastname} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} sm={8} >
            <Typography variant="h6" paragraph>Address: {user.address}</Typography>
            <TextField label="New Address" variant="outlined" {...address} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} sm={4} >
            <Typography variant="h6" paragraph>Postcode: {user.postcode}</Typography>
            <TextField label="New Postcode" variant="outlined" {...postcode} defaultValue={user.postcode} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h6" paragraph>Email: {user.email}</Typography>
            <TextField label="New Email" variant="outlined" {...email} clear={null} fullWidth />
          </Grid>
          <Grid item xs={12} >
            <Typography variant="h6" paragraph>Role: {user.role}</Typography>
            <InputLabel>Trainer</InputLabel>
            <NativeSelect value={selectedRole} onChange={handleSelected}>
              <option value="customer">Customer</option>
              <option value="trainer">Trainer</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button variant="contained" color="primary" type="submit">Update</Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button onClick={handleClear} variant="contained">Clear</Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}
UserForm.propTypes = {
  id: PropTypes.string
}

export default UserForm