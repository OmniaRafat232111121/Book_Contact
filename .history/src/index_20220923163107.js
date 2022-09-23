import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
import 'bootstrap/dist/css/bootstrap.min.css'
//toastify
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router} from 'react-router-dom';
import contactReducer from './redux/reducers/contactReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store=createStore(contactReducer,composeWithDevTools(..))
root.render(
  <React.StrictMode>
  <Router>
  <App/>
  </Router>
 </React.StrictMode>
 
);
