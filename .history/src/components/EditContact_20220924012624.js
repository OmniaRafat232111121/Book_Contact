import React,{useState} from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
const EditContact = () => {
    //validation 
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const contacts=useSelector((state)=>state);
    const currentContact=contact.find(contact=>contact.id===parseInt(id))
    const {id}=useParams()
    const dispatch=useDispatch();
    const history=useHistory();

    const checkEmail=contacts.find((contact)=>contact.email===email&&email)
    const checkPhone=contacts.find((contact)=>contact.phone===phone&&phone)
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


  )
}

export default EditContact
