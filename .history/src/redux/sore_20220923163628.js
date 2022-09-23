import { applyMiddleware, createStore } from "redux"
import {Thunk}
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))