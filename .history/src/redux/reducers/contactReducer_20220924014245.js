const initialState=[
    {
        id:0,
        name:'omnia Rafat',
        number:4465,
        email:'omniarafat2321@gmail.com'

    },
    {
        id:1,
        name:'Salma ali',
        number:22292902,
        email:'salmali@323.com'

    },
    {
         id:2,
         name:'Ahmed mostafa',
         number:23333989,
         email:'ahmedmostafa2344.com'
    }
];
const contactReducer=(state=initialState,action)=>{
switch(action.type){
     case 'ADD_POST':
        state=[...state,action.payload]
        return state
    case "UPDATE_CONTACT":
        constUpdateState=state.map(contact=>contact.id=action.payload.id? action.payload:contact)
        stat

    default:{
        return state;
    }
}
}
export default contactReducer;