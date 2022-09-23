import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-dark my-5 ml-auto ">
          Add Post
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <h1>Welcome to PBook</h1>
        </div>
      </div>
    </div>
  );
};

export default Home