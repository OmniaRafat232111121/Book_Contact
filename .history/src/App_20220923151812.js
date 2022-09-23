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
   <Route exact path="/" element={ <Home />} />
   <Route exact path="/add" element={<AddPost />} />
   <Route exact path="/edit/:id" element={ <EditContact />} />
 
   </Routes>
 </Router>

    </div>
  )
};

export default App
