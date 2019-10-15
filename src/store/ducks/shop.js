import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

// Actions e Types
const {Types, Creators: ShopActions} = createActions({
  requestCategories: null,
  requestCategoriesSuccess: ['categories'],
  requestProducts: ['categoryId'],
  requestProductsSuccess: ['products', 'categoryId'],
  requestProductsFailure: null
})

export const ShopTypes = Types

export default ShopActions

// Initial state e Reducers
const INITIAL_STATE = Immutable({
  products: [],
  loading: true,
  erro: false,
  categories: [],
  active: 1
})

const HANDLERS = {
  [ShopTypes.REQUEST_PRODUCTS]: state => state.merge({loading: true}),

  [ShopTypes.REQUEST_PRODUCTS_SUCCESS]: (state, {products, categoryId}) =>
    state.merge({loading: false, products, active: categoryId}),

  [ShopTypes.REQUEST_PRODUCTS_FAILURE]: state =>
    state.merge({loading: false, erro: true}),
  [ShopTypes.REQUEST_CATEGORIES_SUCCESS]: (state, {categories}) =>
    state.merge({categories})
}

export const shopReducer = createReducer(INITIAL_STATE, HANDLERS)
