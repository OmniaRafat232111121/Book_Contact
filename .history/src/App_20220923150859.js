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
   <BrowserRouter>
   <Routes>
     <Route path="/" >
       <Route index element={<Home />} />
       <Route path="blogs" element={<Blogs />} />
       <Route path="contact" element={<Contact />} />
       <Route path="*" element={<NoPage />} />
     </Route>
   </Routes>
 </BrowserRouter>

    </div>
  )
};

export default App
