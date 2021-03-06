import types from "../types";


const initialState={
    userData:{},
}
export default function counterReducer(state=initialState, action){

    switch(action.type){
        
        case types.LOGIN:
            const userData={...action.payload};
            return{...state,userData}
        
        case types.LOGOUT:
            return{...state, userData:{}}
   
            
        default:
             return {...state}
            
    }

}