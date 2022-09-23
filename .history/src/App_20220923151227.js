import React from 'react'
import { BrowserRouterasRoute, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddPost from './components/AddPost';
import EditContact from './components/EditContact';
import Home from './components/Home';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
   <ToastContainer/>
   {/* add/edit/:id*/ }
   <Navbar/>
   <BrowserRouter>
   <Routes>
   <Route exact path="/" component={() => <Home />} />
   <Route exact path="/add" component={() => <AddPost />} />
   <Route exact path="/edit/:id" component={() => <EditContact />} />
 
   </Routes>
 </BrowserRouter>

    </div>
  )
};

export default App
