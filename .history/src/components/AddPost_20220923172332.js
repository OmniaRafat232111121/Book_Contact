import React from 'react' 
import { useSelector } from 'react-redux'
const AddPost = () => {
    //validation 
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");

    const contacts=useSelector((state)=>state)
    console.log(contacts)
  return (
    <div className="container-fluid">
    <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
    <div className="row">
      <div className="col-md-6 p-5 mx-auto shadow">
        <form onSu>
          <div className="form-group ">
            <input className="form-control mt-3"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
      
            />
          </div>
          <div className="form-group">
            <input
              className="form-control mt-3"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
           
             
            />
          </div>
          <div className="form-group">
            <input
              className="form-control mt-3"
              type="number"
              placeholder="Phone"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
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
