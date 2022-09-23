import { applyMiddleware, createStore } from "redux"
import {thun}
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))