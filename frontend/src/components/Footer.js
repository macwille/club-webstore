import { Typography, Container, Link } from '@material-ui/core'
import React from 'react'

const Footer = () => {
  return (
    <Container>
      <Typography align="center">
        Made by  <Link href="https://github.com/macwille">Ville Manninen</Link>.
        Licensed <Link href="https://opensource.org/licenses/MIT">MIT</Link>
      </Typography>
    </Container>
  )
}

export default Footer