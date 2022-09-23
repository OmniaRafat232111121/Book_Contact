import { applyMiddleware, createStore } from "redux"
import thunk fom 
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))