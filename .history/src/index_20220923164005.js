import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
import 'bootstrap/dist/css/bootstrap.min.css'
//toastify
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import st
root.render(
  <Provider store={store}>
  <React.StrictMode>
  <Router>
  <App/>
  </Router>
 </React.StrictMode>
  </Provider>
 
);

