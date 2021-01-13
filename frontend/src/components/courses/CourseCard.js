import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'
import { removeCourse } from '../../reducers/courseReducer'
import { setNotification } from '../../reducers/notificationReducer'

const useStyles = makeStyles({
  courseCard: {
    minWidth: 260,
    maxWidth: 260,
    minHeight: 300,
    maxHeight: 300,
  },
})

const CourseCard = ({ course }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { name, description, trainer, euros, cents } = course

  const euroString = String(euros)
  const centString = cents < 10 ? `0${cents}` : String(cents)

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
          {name} <br />
          <Typography variant="subtitle1">
            {`${euroString},${centString}€`}
          </Typography>
        </Typography>
        <Typography color="textSecondary" paragraph>
          {description}
        </Typography>
        {trainer &&
          <Typography color="textPrimary">
            {`Trainer: ${trainer.firstname} ${trainer.lastname}`}
          </Typography>}
      </CardContent>
      <CardActions>
        <Button color="primary" onClick={handleClick} size="small">Sign Up</Button>
        <Button color="primary" onClick={handleDelete} size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object,
}

export default CourseCard