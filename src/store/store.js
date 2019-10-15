import {createStore, compose, applyMiddleware} from 'redux'

import rootReducer from './ducks/rootReducer'

const middlewares = []

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares))
  : applyMiddleware(...middlewares)

const store = createStore(rootReducer, composer)

export default store
