import React from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddPost from "./components/AddPost";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Route exact path="/" element={ <Home />} />
      <Route exact path="/add" element={ <AddPost />} />
      <Route exact path="/edit/:id" element={ <EditContact />} />
    </div>
  );
};
export default App;
