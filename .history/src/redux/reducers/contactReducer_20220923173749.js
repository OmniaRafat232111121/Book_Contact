const initialState=[
    {
        id:0,
        name:'omnia Rafat',
        number:123422,
        email:omniarafat2321

    },
    {
        id:1,
        name:'Salma ali',
        number:22292902,

    },
    {
         id:2,
         name:'Ahmed mostafa',
         number:23333989
    }
];
const contactReducer=(state=initialState,action)=>{
switch(action.type){

    default:{
        return state;
    }
}
}
export default contactReducer;