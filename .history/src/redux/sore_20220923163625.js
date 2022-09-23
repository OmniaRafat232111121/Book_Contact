import { applyMiddleware, createStore } from "redux"
import 
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))