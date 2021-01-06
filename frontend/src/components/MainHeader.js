import React from 'react'
import PropTypes from 'prop-types'
import { Box, Paper, Typography } from '@material-ui/core'
import { TITLE } from '../config'
import Navigation from './Navigation'

const MainHeader = ({ darkmode, handleDarkmode }) => {

  return (
    <Paper color="primary">
      <Box p={3}>
        <Box py={8}>
          <Typography variant="h1" align="center" paragraph >
            {TITLE}
          </Typography>
        </Box>
        <Navigation darkmode={darkmode} handleDarkmode={handleDarkmode} />
      </Box>
    </Paper>
  )
}

MainHeader.propTypes = {
  darkmode: PropTypes.bool,
  handleDarkmode: PropTypes.func
}


export default MainHeader