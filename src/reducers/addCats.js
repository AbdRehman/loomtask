const initialState = [];

const addCategory = (state= initialState,action) =>{
    console.log(action);
    switch(action.type){
        case "addCategory" : return action.payload ;
        case "addlinkSidebar" : return "Helo";
        default:return state;
    }
}



export default addCategory
