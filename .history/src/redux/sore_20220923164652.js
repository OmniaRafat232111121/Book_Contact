import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import contactReducer from './reducers/contactReducer'
const store = createStore(
  contactReducer,
  composeWithDevTools(applyMiddleware())
)

export default store