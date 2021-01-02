import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'

const MainHeader = ({ title }) => {

  const setTitle = title ? title : 'PLACEHOLDER'

  return (
    <Box>
      <Typography variant="h1" align="center">
        {setTitle}
      </Typography>
    </Box>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string
}

export default MainHeader