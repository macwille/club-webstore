import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Box, Button, TextField, Grid, InputLabel, NativeSelect } from '@material-ui/core'
import courseService from '../../services/courses'
import { useField } from '../../hooks/inputFields'
import { setNotification } from '../../reducers/notificationReducer'

const CourseForm = ({ courses, setCourses }) => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const [selectedUser, setSelected] = useState(null)
  const name = useField('text')
  const description = useField('text')
  const date = useField('date')
  const time = useField('time')
  const euros = useField('number')
  const cents = useField('number')

  const handleClear = (event) => {
    name.clear(event)
    description.clear(event)
    date.clear(event)
    time.clear(event)
    euros.clear(event)
    cents.clear(event)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newCourse = {
      name: name.value,
      description: description.value,
      euros: euros.value,
      cents: cents.value,
      trainer: selectedUser,
    }
    try {
      courseService.create(newCourse).then(response => {
        setCourses(courses.concat(response))
      })
      dispatch(setNotification(`Added course ${newCourse.name}`))
      handleClear(event)
    } catch (error) {
      dispatch(setNotification('Error adding course'))
      console.log(error)
    }
  }

  const handleSelected = (event) => {
    setSelected(event.target.value)
  }

  return (
    <Box>
      <Container>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField label="Course name" variant="outlined" {...name} clear={null} autoFocus fullWidth required />
              <Button color="primary" size="small" tabindex="-1" onClick={name.clear}>Clear</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Description" variant="outlined" {...description} clear={null} fullWidth required />
              <Button color="primary" size="small" tabindex="-1" onClick={description.clear}>Clear</Button>
            </Grid>
            <Grid item xs={3}>
              <TextField label="Euros" variant="outlined" {...euros} clear={null} min="0" required />
              <Button color="primary" size="small" tabindex="-1" onClick={euros.clear}>Clear</Button>
            </Grid>
            <Grid item xs={8}>
              <TextField label="Cents" variant="outlined" {...cents} clear={null} min="0" max="99" required />
              <Button color="primary" size="small" tabindex="-1" onClick={cents.clear}>Clear</Button>
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Date</InputLabel>
              <TextField variant="outlined" {...date} clear={null} min="0" max="99" required />
              <Button color="primary" size="small" tabindex="-1" onClick={date.clear}>Clear</Button>
            </Grid>
            <Grid item xs={8}>
              <InputLabel>Time</InputLabel>
              <TextField variant="outlined" {...time} clear={null} min="0" max="99" required />
              <Button color="primary" size="small" tabindex="-1" onClick={time.clear}>Clear</Button>
            </Grid>
            <Grid item xs={12}>
              <InputLabel>Trainer</InputLabel>
              <NativeSelect value={selectedUser} onChange={handleSelected}>
                <option aria-label="None" value={null} />
                {users && users.map(u => (
                  <option key={u.id} value={u.id}>{u.username}</option>)
                )}
              </NativeSelect>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit">Create</Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </Box>
  )
}

CourseForm.propTypes = {
  courses: PropTypes.array,
  setCourses: PropTypes.func
}

export default CourseForm