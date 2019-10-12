import {StatusBar, Platform} from 'react-native'

import theme from '~/theme'

Platform.OS === 'android'
  ? StatusBar.setBackgroundColor(theme.hsl.orange)
  : null

StatusBar.setBarStyle('light-content')
