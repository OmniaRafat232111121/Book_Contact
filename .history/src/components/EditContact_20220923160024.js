import React from 'react'
import {Link,useParame}
const EditContact = () => {
  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <button
          className="btn btn-dark ml-auto my-5"
        >
          Go back
        </button>
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
