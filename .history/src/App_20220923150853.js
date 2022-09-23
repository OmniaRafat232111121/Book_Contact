import React from 'react'
import { Route, Routes,Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
   <ToastContainer/>
   {/* add/edit/:id*/ }
   <Navbar/>
  

    </div>
  )
};

export default App
