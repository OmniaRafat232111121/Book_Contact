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
<h1>I am add Component</h1>
</Rou
</Switch>
     
      
    </div>
  )
};

export default App
