import React from 'react'
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
   <ToastContainer/>
   {/* add/edit/:id*/ }
   <Navbar/>
<Switch>
<Route path="/add"/>

</Switch>
     
      
    </div>
  )
};

export default App
