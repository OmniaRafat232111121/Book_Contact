import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const contacts=useSelector(state=>state)
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-dark my-5 ml-auto ">
          Add Post
        </Link>
        <div className="col-md-10 mx-auto my-4">
 <table className="table table-hover">
 <thead>
 
 </thead>
 </table>
        </div>
      </div>
    </div>
  );
};

export default Home