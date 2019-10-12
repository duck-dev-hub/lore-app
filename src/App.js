import React from 'react'
import {ThemeProvider} from 'styled-components/native'

import theme from './theme'
import Navigation from '~/navigation/Navigation'

const App = () => (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
)

export default App
