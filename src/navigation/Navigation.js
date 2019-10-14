import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Home from '~/screens/Home/Home'
import Cart from '~/screens/Cart/Cart'

import Header from '~/components/Header/Header'

const Navigation = createStackNavigator(
  {
    Home,
    Cart
  },
  {
    defaultNavigationOptions: {
      header: Header
    }
  }
)

export default createAppContainer(Navigation)
