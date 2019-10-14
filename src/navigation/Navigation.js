import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Shop from '~/screens/Shop/Shop'
import Detalhes from '~/screens/Detalhes/Detalhes'
import Carrinho from '~/screens/Carrinho/Carrinho'

import Header from '~/components/Header/Header'

const Navigation = createStackNavigator(
  {
    Shop,
    Detalhes,
    Carrinho
  },
  {
    defaultNavigationOptions: {
      header: Header
    }
  }
)

export default createAppContainer(Navigation)
