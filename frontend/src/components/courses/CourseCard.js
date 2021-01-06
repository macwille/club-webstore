import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  courseCard: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const CourseCard = ({ course }) => {
  console.log('Course', course)
  const classes = useStyles()

  const handleClick = (event) => {
    event.preventDefault()
    console.log('Add product to cart:', course)
  }


  return (
    <Card className={classes.courseCard}>
      <CardContent>
        <Typography variant="h6" paragraph>
          {course.name} <br />
          {course.euros},{course.cents}€
        </Typography>
        <Typography color="textSecondary">
          Description: {course.name}<br />
          Trainer: {course.trainer.id}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handleClick} size="small">Sign Up</Button>
      </CardActions>
    </Card>
  )
}

CourseCard.propTypes = {
  course: PropTypes.object,
}

export default CourseCard