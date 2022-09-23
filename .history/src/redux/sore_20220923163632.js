import { applyMiddleware, createStore } from "redux"
import {hunk}
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))