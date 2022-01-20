import React from 'react'
import { createTheme } from '@material-ui/core'
import { indigo, red, lightBlue } from '@material-ui/core/colors'

const theme = (darkmode) => {
  return (React.useMemo(() => createTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
      primary: darkmode ? lightBlue : indigo,
      secondary: red,
    },
  }), [darkmode],
  ))
}

export default theme