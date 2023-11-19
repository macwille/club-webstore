import { useEffect } from 'react'
import { TITLE } from '../config'
import { Helmet } from 'react-helmet'
import { Box, Container, Typography, CircularProgress, Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../reducers/userReducer'
import UserCard from './users/UserCard'



const About = () => {

  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const renderUsers = () => {
    if (users) {
      return (
        <Grid container padding={3}>
          {users.map(user =>
            <Grid item key={user.id} xs={6}>
              <UserCard user={user} />
            </Grid>
          )
          }
        </Grid >
      )
    }
    return (
      <CircularProgress />
    )
  }

  return (
    <Box>
      <Helmet >
        <title>{TITLE}</title>
      </Helmet>
      <Container>
        <Typography variant="h4">Users</Typography>
        {renderUsers()}
      </Container >
    </Box >
  )
}

export default About