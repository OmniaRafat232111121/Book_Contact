
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!email||!phone||!name){
            return toast.warning("please fill all Fileds")
        }
        if(checkEmail){
            return toast.error("The email is already exist")
        }
        if(checkPhone){
            return toast.error("The phone is alreadyexist")
        }
         const data = {
            id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
            email,
            name,
            phone,
          };
          dispatch({
            type:'ADD_POST',
            payload:data
          })
        toast.success("Student added Succefully")
        history.push("/");

    }
return(
    <div className="container">
    <div className="row d-flex flex-column">
      <button
        className="btn btn-dark ml-auto my-5"
        onClick={() => history.push("/")}
      >
        Go back
      </button>
      <div className="col-md-6 mx-auto shadow p-5">
        {currentContact ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                className="form-control"
                value={name}
                placeholder={"Name"}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                value={email}
                placeholder={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                value={phone}
                placeholder={"Phone"}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-group d-flex align-items-center justify-content-between my-2">
              <button type="submit" className="btn btn-primary">
                Update Contact
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => history.push("/")}
              >
                cancel
              </button>
            </div>
          </form>
        ) : (
          <h1 className=" display-3 text-center"> studentContact{id}is not=exist</h1>
        )}
      </div>
    </div>
  </div>
);
};

export default EditContact
