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
<Router>
<Routes>
<Route path="/add">
<h1>I am add Component</h1>
</Route>
<Route path="/edit">
<h1>I am edit Component</h1>

</Route>
</Routes>
</Router>

    </div>
  )
};

export default App
