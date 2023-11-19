import { createTheme } from '@mui/material/styles'
import { indigo, red } from '@mui/material/colors'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: indigo,
    secondary: red,
  },
})

export default theme