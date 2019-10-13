import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from '~/screens/Home/Home'
import Cart from '~/screens/Cart/Cart'

const Navigation = createStackNavigator(
  {
    Home,
    Cart
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default createAppContainer(Navigation)
