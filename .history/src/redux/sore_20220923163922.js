import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(
  contactReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store