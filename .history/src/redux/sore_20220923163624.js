import { applyMiddleware, createStore } from "redux"
impor
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))