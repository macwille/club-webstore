import { Route, Routes } from 'react-router-dom'
import { Paper } from '@mui/material/'
import MainHeader from './MainHeader'
import Courses from './courses/Courses'
import Store from './store/Store'
import RegisterForm from './users/RegisterForm'
import Login from './users/Login'
import About from './About'
import UserPanel from './users/UserPanel'



const MainBody = () => {

  return (
    <Paper>
      <Routes>
        <Route path="/courses" element={<Courses />} />
        <Route path="/store" element={<Store />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<UserPanel />} />
        <Route path="/" element={<><MainHeader /><About /></>} />
      </Routes>
    </Paper>
  )
}

export default MainBody