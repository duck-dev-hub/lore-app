import React from 'react'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components/native'

import store from '~/store/store'
import theme from './theme'
import Navigation from '~/navigation/Navigation'

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  </Provider>
)

export default App
