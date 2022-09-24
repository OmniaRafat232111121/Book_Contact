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
 <thead className="text-white bg-dark text-center">
 <tr>
 <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
 </tr>
 </thead>
 <tbody>
 {contacts.map((contact,id)=>(
  <tr>
  <td>{id}</td>
  </tr>
 ))}
 </tbody>
 </table>
        </div>
      </div>
    </div>
  );
};

export default Home