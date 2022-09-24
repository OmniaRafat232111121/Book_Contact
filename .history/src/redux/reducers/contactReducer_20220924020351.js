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
 const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_CONTACT":
        state = [...state, action.payload];
        return state;
      case "UPDATE_CONTACT":
        const contactUpdate = state.map((contact) =>
          
        );
        state = contactUpdate;
        return state;
      case "RESET_CONTACT":
        state = [{ name: null, email: null, phone: null }];
        return state;
      default:
        return state;
    }
  };
  export default contactReducer