import React, { useState, useEffect } from 'react'
import { TITLE } from '../../config'
import { Helmet } from 'react-helmet'
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core'
import CourseList from './CourseList'
import courseService from '../../services/courses'
import CourseForm from './CourseForm'

const TabPanel = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const Courses = () => {
  const [courses, setCourses] = useState(null)
  const [value, setValue] = useState(0)

  useEffect(() => {
    courseService
      .getAll()
      .then(initial => {
        setCourses(initial)
      })
  }, [])


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box>
      <Helmet >
        <title>Courses - {TITLE}</title>
      </Helmet>
      <AppBar color="primary" position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Courses" />
          <Tab label="My Courses" />
          <Tab label="Create" />
        </Tabs>
      </AppBar>
      <Box p={3} pt={8}>
        <TabPanel value={value} index={0}>
          <CourseList courses={courses} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          My Courses
        </TabPanel>
        <TabPanel value={value} index={2}>
          <CourseForm courses={courses} setCourses={setCourses} />
        </TabPanel>
      </Box>
    </Box>
  )
}

export default Courses