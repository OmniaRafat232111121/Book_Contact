import React,{useState} from 'react' 
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
const AddPost = () => {
    //validation 
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const contacts=useSelector((state)=>state)
    const checkEmail=contacts.find((contact)=>contact.email===email&&email)
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email||!phone||!name){
            return toast.warning("please fill all Fileds")
        }
        if(checkEmail){
            return toast.error("The email is already exist")
        }

    }
  return (
    <div className="container-fluid">
    <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
    <div className="row">
      <div className="col-md-6 p-5 mx-auto shadow">
        <form onSubmit={handleSubmit}>
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
