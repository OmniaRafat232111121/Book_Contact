import { applyMiddleware, createStore } from "redux"
import thunk fom 'raec'
const store=createStore(contactReducer,composeWithDevTools(applyMiddleware(thunk,logger)))