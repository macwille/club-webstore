import { Typography, Box, Link, Grid, IconButton } from '@mui/material'

const Footer = () => {

  return (
    <Box pb="2em" pt="10em">
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <Typography paragraph color="textSecondary">
            Made by Ville Manninen. Licensed <Link href="https://opensource.org/licenses/MIT">MIT</Link>.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item >
          <IconButton href="https://github.com/macwille/club-webstore" color="primary">
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer