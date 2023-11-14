import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { TITLE } from '../config'


const MainHeader = () => {

  return (
    <Card>
      <Box>
        <CardContent>
          <Typography variant="h2" align="center" paragraph >
            {TITLE.toUpperCase()}
          </Typography>
        </CardContent>
        <CardMedia
          image={'../static/images/logo512.png'}
        />
      </Box>
    </Card>
  )
}

export default MainHeader