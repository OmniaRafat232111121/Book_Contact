import React from 'react'
import {Link,useParams} from 'react-router-dom'
const EditContact = () => {
  const {id}=useParams()
    return (
    <div className="container">
    <h1 className='display-3 my-5 txt-center'>Edit Student {id}</h1>
      <div className="row d-flex flex-column">
        <div className="col-md-6 mx-auto shadow p-5">
            <form >
              <div className="form-group">
                <input
                  className="form-control mt-3"
                  placeholder={"Name"}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control mt-3"
                  placeholder={"Email"}
                 
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control mt-3"
                  placeholder={"Phone"}
           
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between my-2">
                <button type="submit" className="btn btn-primary">
                  Update Contact
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                >
                  cancel
                </button>
              </div>
            </form>
         
        </div>
      </div>
    </div>
  );
};

export default EditContact
