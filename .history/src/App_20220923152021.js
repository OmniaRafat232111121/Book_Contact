import React from 'react'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
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
   <Router>
   <Routes>
   <Route  path="/" element={<Home />} />
   <Route  path="/add" element={<AddPost />} />
   <Route  path="/edit/:id" element={ <EditContact />} />
 <Home
   </Routes>
 </Router>

    </div>
  )
};

export default App
