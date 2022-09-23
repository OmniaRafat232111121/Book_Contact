import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const store = createStore(
  conta,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store