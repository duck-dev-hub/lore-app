import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Header from '~/components/Header/Header'

import Home from '~/screens/Home/Home'
import Cart from '~/screens/Cart/Cart'

const Navigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: Header
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      header: Header
    }
  }
})

export default createAppContainer(Navigation)
