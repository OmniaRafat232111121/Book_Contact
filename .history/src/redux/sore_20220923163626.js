import { applyMiddleware, createStore } from "redux"
import {T}
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))