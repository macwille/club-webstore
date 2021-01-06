import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import { TITLE } from '../config'
import Navigation from './Navigation'

const MainHeader = () => {

  return (
    <Paper color="primary">
      <Box p={3}>
        <Box py={8}>
          <Typography variant="h1" align="center" paragraph >
            {TITLE}
          </Typography>
        </Box>
        <Navigation />
      </Box>
    </Paper>
  )
}


export default MainHeader