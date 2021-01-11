import React from 'react'
import PropTypes from 'prop-types'
import { Box, CircularProgress, Grid } from '@material-ui/core'
import Course from './CourseCard'

const CourseList = ({ courses }) => {

  if (!courses) {
    return (
      <Box>
        <CircularProgress />
      </Box>
    )
  }

  return (
    <Box>
      <Grid container spacing={1} justify="flex-start" alignItems="baseline" direction="row">
        {courses.map(c =>
          <Grid key={c.id} item xs={12} sm={3}>
            <Course course={c} />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(Object)
}

export default CourseList