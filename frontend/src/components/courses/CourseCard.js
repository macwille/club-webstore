import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Typography, CardActionArea } from '@material-ui/core'
import { removeCourse } from '../../reducers/courseReducer'
import { setNotification } from '../../reducers/notificationReducer'

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
  const dispatch = useDispatch()

  const euroString = String(course.euros)
  const centString = course.cents < 10 ? `0${course.cents}` : String(course.cents)

  const handleClick = (event) => {
    event.preventDefault()
  }
  const handleDelete = () => {
    try {
      dispatch(removeCourse(course.id))
      dispatch(setNotification('Deleted product'))
    } catch (error) {
      dispatch(setNotification('Error deleting product'))
    }
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
        {course.trainer &&
          <Typography color="textPrimary">
            Trainer: {course.trainer.firstname} {course.trainer.lastname}
          </Typography>}
      </CardContent>
      <CardActionArea>
        <CardActions >
          <Button color="primary" onClick={handleClick} size="small">Sign Up</Button>
          <Button color="primary" onClick={handleDelete} size="small">Delete</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object,
}

export default CourseCard