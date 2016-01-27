import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const loggerMiddleware = createLogger()

const createStoreWithMiddleware = compose(
	applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
),window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState)
}
