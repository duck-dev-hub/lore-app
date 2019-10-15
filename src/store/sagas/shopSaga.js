import {put, call} from 'redux-saga/effects'

import api from '~/services/api'
import ShopActions from '~/store/ducks/shop'

export function* getCategories() {
  const {data: categories} = yield call(api.get, '/categories')

  yield put(ShopActions.requestCategoriesSuccess(categories))
}

export function* getProducts({categoryId}) {
  const {
    data: {products}
  } = yield call(api.get, `/category_products/${categoryId}`)

  yield put(ShopActions.requestProductsSuccess(products, categoryId))
}
