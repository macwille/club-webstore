import React from 'react'
import { removeUser } from '../../reducers/userReducer'
import { setNotification } from '../../reducers/notificationReducer'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardActions, Button, Typography, CardActionArea, Box } from '@material-ui/core'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles({
  userCard: {
    minWidth: 260,
    maxWidth: 260,
    minHeight: 300,
    maxHeight: 300,
  }
})

const UserCard = ({ user }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const handleDelete = () => {
    try {
      dispatch(removeUser(user.id))
      dispatch(setNotification('Deleted user'))
    } catch (error) {
      dispatch(setNotification('Error deleting user'))
    }
  }

  return (
    <Box>
      <Card className={classes.userCard}>
        <CardContent>
          <Typography variant="h6" paragraph>
            {user.username} <br />
            <Typography variant="subtitle1">
              {user.firstname} {user.lastname}
            </Typography>
          </Typography>
          <Typography color="textSecondary" paragraph>
            email: {user.email} <br />
          role: {user.role}
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardActions >
            <Button color="primary" onClick={handleDelete} size="small">Delete</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  )
}

UserCard.propTypes = {
  user: PropTypes.object,
}

export default UserCard