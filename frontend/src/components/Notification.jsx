import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar, Button, SnackbarContent } from '@mui/material'
import { clearNotification } from '../reducers/notificationReducer'

const Notification = () => {
  const message = useSelector(state => state.notification)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(clearNotification())
  }

  if (!message) {
    return null
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={message !== null}
        autoHideDuration={6000}
        message={message}
        onClose={handleClose}>
        <SnackbarContent
          message={message}
          action={
            <>
              <Button color="primary" size="small" onClick={handleClose}>Close</Button>
            </>
          }
        />
      </Snackbar>
    </div>
  )
}

export default Notification