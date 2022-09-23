import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
import 'bootstrap/dist/css/bootstrap.min.css'
//toastify
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from 'react-router-dom';
root.render(
  <React.StrictMode>
  <BrowserRouter>
  import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
          React Redux Contact Book
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
  </BrowserRouter>
 
);

