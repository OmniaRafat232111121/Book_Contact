import React from 'react'
const AddPost = () => {
  return (
    <div className="container-fluid">
    <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
    <div className="row">
      <div className="col-md-6 p-5 mx-auto shadow">
        <form>
          <div className="form-group ">
            <input className="form-control "
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
              className="form-control"
              type="number"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <input
              className="btn btn-block btn-dark"
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
