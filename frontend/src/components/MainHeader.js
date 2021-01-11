import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Card, CardContent, CardMedia, Typography } from '@material-ui/core'
import { TITLE } from '../config'

const useStyles = makeStyles({
  mainHeader: {
    padding: '4em',
    marginBottom: '2em',
  },
  titleText: {
    fontStyle: 'normal',
    fontWeight: 'bold'
  }
})

const MainHeader = () => {
  const classes = useStyles()

  return (
    <Card className={classes.mainHeader}>
      <Box>
        <CardContent>
          <Typography className={classes.titleText} variant="h2" align="center" paragraph >
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