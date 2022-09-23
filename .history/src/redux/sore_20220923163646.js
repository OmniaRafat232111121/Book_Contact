import { applyMiddleware, createStore } from "redux"
import thunk f
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))