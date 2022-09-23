import { applyMiddleware, createStore } from "redux"
import thunk fom 'raect'
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))