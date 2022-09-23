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
      <Route exact path="/" ele={ <Home />} />
      <Route exact path="/add" ele={ <AddPost />} />
      <Route exact path="/edit/:id" ele={ <EditContact />} />
    </div>
  );
};
export default App;
