import { applyMiddleware, createStore } from "redux"
import {Thun}
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))