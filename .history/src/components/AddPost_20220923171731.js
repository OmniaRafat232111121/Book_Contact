import React from 'react' 
import { useSelector } from 'react-redux'
const AddPost = () => {
    //validation 
    const[name,setName]=useState("");
    const[email,setEmail]=useS
    const contacts=useSelector((state)=>state)
    console.log(contacts)
  return (
    <div className="container-fluid">
    <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
    <div className="row">
      <div className="col-md-6 p-5 mx-auto shadow">
        <form>
          <div className="form-group ">
            <input className="form-control mt-3"
              type="text"
              placeholder="Full name"
      
            />
          </div>
          <div className="form-group">
            <input
              className="form-control mt-3"
              type="email"
              placeholder="Email"
           
             
            />
          </div>
          <div className="form-group">
            <input
              className="form-control mt-3"
              type="number"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <input
              className="btn btn-block btn-dark mt-3"
              type="submit"
              value="Add Student"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default AddPost
