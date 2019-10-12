import React from 'react'
import {View, Text} from 'react-native'
import {ThemeProvider} from 'styled-components/native'

import theme from './theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <View>
      <Text>Olá Mundo</Text>
    </View>
  </ThemeProvider>
)

export default App
