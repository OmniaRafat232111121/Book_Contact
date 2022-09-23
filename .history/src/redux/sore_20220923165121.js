import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import contactReducer from './reducers/contactReducer'
const store = createStore(
  contactReducer,
  composeWithDevTools(applyMiddleware(logger))
)

export default store