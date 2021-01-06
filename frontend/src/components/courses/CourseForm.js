import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Container, Box, Button, TextField, Grid, InputLabel, NativeSelect } from '@material-ui/core'
import courseService from '../../services/courses'
import { useField } from '../../hooks/inputFields'

const CourseForm = ({ courses, setCourses }) => {
  const users = useSelector(state => state.users)
  const [selectedUser, setSelected] = useState(null)
  const name = useField('text')
  const description = useField('text')
  const date = useField('date')
  const time = useField('time')
  const euros = useField('number')
  const cents = useField('number')

  console.log('Users', users)
  console.log('Selected', selectedUser)

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
        console.log('Added course', response)
        setCourses(courses.concat(response))
      })
    } catch (error) {
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
              <TextField label="Course name" variant="outlined" {...name} clear={null} fullWidth required />
              <Button color="primary" size="small" onClick={name.clear}>Clear</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Description" variant="outlined" {...description} clear={null} fullWidth required />
              <Button color="primary" size="small" onClick={description.clear}>Clear</Button>
            </Grid>
            <Grid item xs={3}>
              <TextField label="Euros" variant="outlined" {...euros} clear={null} min="0" required />
              <Button color="primary" size="small" onClick={euros.clear}>Clear</Button>
            </Grid>
            <Grid item xs={8}>
              <TextField label="Cents" variant="outlined" {...cents} clear={null} min="0" max="99" required />
              <Button color="primary" size="small" onClick={cents.clear}>Clear</Button>
            </Grid>
            <Grid item xs={3}>
              <InputLabel>Date</InputLabel>
              <TextField variant="outlined" {...date} clear={null} min="0" max="99" required />
              <Button color="primary" size="small" onClick={date.clear}>Clear</Button>
            </Grid>
            <Grid item xs={8}>
              <InputLabel>Time</InputLabel>
              <TextField variant="outlined" {...time} clear={null} min="0" max="99" required />
              <Button color="primary" size="small" onClick={time.clear}>Clear</Button>
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