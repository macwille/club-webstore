import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Typography, CardActionArea } from '@material-ui/core'

const useStyles = makeStyles({
  courseCard: {
    minWidth: 260,
    maxWidth: 260,
    minHeight: 300,
    maxHeight: 300,
  }
})

const CourseCard = ({ course }) => {
  const classes = useStyles()

  const euroString = String(course.euros)
  const centString = course.cents < 10 ? `0${course.cents}` : String(course.cents)

  const handleClick = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={classes.courseCard}>
      <CardContent>
        <Typography variant="h6" paragraph>
          {course.name} <br />
          <Typography variant="subtitle1">
            {euroString},{centString}€
          </Typography>
        </Typography>
        <Typography color="textSecondary" paragraph>
          {course.description}
        </Typography>
        <Typography color="textPrimary">
          {course.trainer.firstname} {course.trainer.lastname}
        </Typography>
      </CardContent>
      <CardActionArea>
        <CardActions >
          <Button color="primary" onClick={handleClick} size="small">Sign Up</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object,
}

export default CourseCard