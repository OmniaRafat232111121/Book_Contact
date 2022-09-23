import { applyMiddleware, createStore } from "redux"
import thunk
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))