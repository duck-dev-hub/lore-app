import {all, takeLatest} from 'redux-saga/effects'

import {getCategories, getProducts} from './shopSaga'

import {ShopTypes} from '~/store/ducks/shop'

function* rootSaga() {
  return yield all([
    takeLatest(ShopTypes.REQUEST_CATEGORIES, getCategories),
    takeLatest(ShopTypes.REQUEST_PRODUCTS, getProducts)
  ])
}

export default rootSaga
