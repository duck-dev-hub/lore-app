import {createStore, compose, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './ducks/rootReducer'
import rootSaga from './sagas/rootSaga'

const monitor = __DEV__ ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({monitor})

const middlewares = [sagaMiddleware]

const composer = __DEV__
  ? compose(
      applyMiddleware(...middlewares),
      console.tron.createEnhancer()
    )
  : applyMiddleware(...middlewares)

const store = createStore(rootReducer, composer)

sagaMiddleware.run(rootSaga)

export default store
