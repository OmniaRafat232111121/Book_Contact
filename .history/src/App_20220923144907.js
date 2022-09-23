import React from 'react'
import { Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import Switch } from 'react-router-dom';
const App = () => {
  return (
    <div>
   <ToastContainer/>
   {/* add/edit/:id*/ }
   <Navbar/>
<Switch>
<Route path="/add">
<h1>I am add Component</h1>
</Route>
<Route path="/edit">
<h1>I am edit Component</h1>
</Route>
</Switch>
    </div>
  )
};

export default App
