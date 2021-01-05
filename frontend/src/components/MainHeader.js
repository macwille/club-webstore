import { Paper, Box, Container, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import React from 'react'
import Navigation from './Navigation'

const MainHeader = ({ title }) => {
  const setTitle = title ? title : 'PLACEHOLDER'


  return (
    <Box pb="2em">
      <Paper>
        <Container>
          <Typography variant="h1" align="center" paragraph >
            {setTitle}
          </Typography>
        </Container>
        <Navigation />
      </Paper>
    </Box>
  )
}

MainHeader.propTypes = {
  title: PropTypes.string
}

export default MainHeader