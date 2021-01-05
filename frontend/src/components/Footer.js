import { Typography, Box, Link } from '@material-ui/core'
import React from 'react'

const Footer = () => {
  return (
    <Box pb="2em" pt="40em">
      <Typography align="center">
        Made by Ville Manninen.
        Licensed <Link href="https://opensource.org/licenses/MIT">MIT</Link>
      </Typography>
    </Box>
  )
}

export default Footer