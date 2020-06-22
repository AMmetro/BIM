import {getAuthUserData} from "./auth-reducer";

export const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";


export type InitialStateType = {
    initialized: boolean
}

let initialState: InitialStateType ={
       initialized: false,
      }

const appReducer = (state:InitialStateType =initialState, action:any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}

        default:
            return state;
    }
};

 export type InitializedSuccessType = {type: typeof INITIALIZED_SUCCESS }

export const initializedSuccess = ():InitializedSuccessType => { return  {type: INITIALIZED_SUCCESS }};

export const initializedApp = () => (dispatch:any)=> {
    let promise = dispatch (getAuthUserData())
          promise.then(()=> {
        dispatch (initializedSuccess());
    });
    }



export default appReducer;



