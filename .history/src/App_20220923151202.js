import React from 'react'
import { Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AddPost from './components/AddPost';
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
  <Ed
   </Routes>
 </BrowserRouter>

    </div>
  )
};

export default App
