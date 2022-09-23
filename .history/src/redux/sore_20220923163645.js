import { applyMiddleware, createStore } from "redux"
import thunk fr
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))