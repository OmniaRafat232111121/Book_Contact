import React from 'react'

const AddPost = () => {
  return (
    <div className="container-fluid">
    <h1 className="text-center text-dark py-3 display-2">Add Post</h1>
    <div className="row">
      <div className="col-md-6 p-5 mx-auto shadow">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Full name"
              value={name}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={email}
             
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="number"
              placeholder="Phone"
              value={phone}
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
