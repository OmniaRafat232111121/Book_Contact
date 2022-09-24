import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const history = useHistory();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
  if(currentContact){
    setName(currentContact.name);
    setEmail(currentContact.email);
    setPhone(currentContact.phone);
  }
  }, [currentContact]);
const checkEmail=contacts.find((contact)=> contact.id!==parseInt(id) && contact.email===email&&email)
const checkPhone=contacts.find((contact)=>contact.id!==parseInt(id) && contact.phone===phone&&phone)
const handleSubmit= (e) => {
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
        
          updateContact(data);
          toast.success("Contact updated successfully!!");
          history.push("/");

      

  };

  return (
    
  );  
          };          
  const mapStateToProps = (state) => ({
    contacts: state,
  });
  const mapDispatchToProps = (dispatch) => ({
    updateContact: (data) => {
      dispatch({ type: "UPDATE_CONTACT", payload: data });
    },
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditContact);


