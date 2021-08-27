import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import { createRootReducer } from './createRootReducer'
import { logger } from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory()

const devMode = process.env.NODE_ENV === 'development' && typeof window === 'object'

export function configureStore() {
  const middleware = [routerMiddleware(history), ...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
  if (devMode) middleware.push(logger)
  const store = createStore(createRootReducer(history), composeWithDevTools(applyMiddleware(...middleware)))
  sagaMiddleware.run(rootSaga)

  return store
}
