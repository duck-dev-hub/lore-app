import {StatusBar, Platform} from 'react-native'

import theme from '~/theme'

Platform.OS === 'android'
  ? StatusBar.setBackgroundColor(theme.hsl.purple)
  : null

StatusBar.setBarStyle('light-content')
