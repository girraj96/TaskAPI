import types from "../types";


const initialState={
    userData:{},
}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        
        case types.CHATS:
            const data={...action.payload};
            return{...state,data}
            
        default:
             return {...state}
            
    }

}