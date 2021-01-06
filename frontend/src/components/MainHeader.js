import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import Navigation from './Navigation'

const MainHeader = ({ title }) => {
  const setTitle = title ? title : 'PLACEHOLDER'

  return (
    <Paper color="primary">
      <Box p={3}>
        <Box py={8}>
          <Typography variant="h1" align="center" paragraph >
            {setTitle}
          </Typography>
        </Box>
        <Navigation />
      </Box>
    </Paper>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string
}

export default MainHeader