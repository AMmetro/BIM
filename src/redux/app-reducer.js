import {getAuthUserData} from "./auth-reducer";

export const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState ={
       initialized: false,
      }

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true}

        default:
            return state;
    }
};


export const initializedSuccess = ()=> { return  {type: "INITIALIZED-SUCCESS",  }};

export const initializedApp = () => (dispatch)=> {
    let promise = dispatch (getAuthUserData())
          promise.then(()=> {
        dispatch (initializedSuccess());
    });
    }



export default appReducer;



