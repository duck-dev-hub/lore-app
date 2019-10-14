import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Actions e Types
const {Types, Creators: ShopActions} = createActions({
  requestCategories: null,
  requestProducts: ['category'],
  requestProductsSuccess: ['products'],
  requestProductsFailure: null
})

export const ShopTypes = Types

export default ShopActions

// Initial state e Reducers
const INITIAL_STATE = Immutable({
  products: [],
  loading: true,
  erro: false,
  categories: []
})

const HANDLERS = {
  [ShopTypes.REQUEST_PRODUCTS]: state => state.merge({loading: true}),

  [ShopTypes.REQUEST_PRODUCTS_SUCCESS]: (state, {products}) =>
    state.merge({loading: false, products}),

  [ShopTypes.REQUEST_PRODUCTS_FAILURE]: state =>
    state.merge({loading: false, erro: true})
}

export const shopReducer = createReducer(INITIAL_STATE, HANDLERS)
