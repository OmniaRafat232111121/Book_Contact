import { applyMiddleware, createStore } from "redux"

const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))