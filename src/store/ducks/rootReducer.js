import {combineReducers} from 'redux'

import {shopReducer as shop} from './shop'
import {carrinhoReducer as carrinho} from './carrinho'

const rootReducer = combineReducers({
  shop,
  carrinho
})

export default rootReducer
