import {userAPI, securityAPI} from "../api/api";
import {SetUserProfileActionCreater} from "./profile-reducer";
import {stopSubmit} from "redux-form";


//   31  Минута поле для ввода


export const SET_USER_DATA = "SET-USER-DATA";
export const GET_CAPTCHA_URL_SUCCESS = "GET-CAPTCHA-URL-SUCCESS";     // full address

type InitialStateType ={
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean | null,
    isFetching: boolean | null,
    captchaUrl: string | null
}



let initialState: InitialStateType ={
       userId: null,
       email: null,
       login: null,
       isAuth: false,
       isFetching: false,
       captchaUrl: null   // if null captcha is not required
      }

const authReducer = (state:InitialStateType=initialState, action:any): InitialStateType => {

    switch (action.type)  {
           case SET_USER_DATA:
                 return {...state, ...action.payload};

           case GET_CAPTCHA_URL_SUCCESS:
               return {...state, ...action.payload};

           default:
                return state;
    }
};

type SetAuthUserDataPayloadType = {userId:number|null, email:string|null, login:string|null, isAuth:boolean }

// export const setAuthUserData = (userId:number, email:string, login:string, isAuth:boolean):SetAuthUserDataType => {
//     return {type: SET_USER_DATA, payload: {userId, email, login, isAuth}};

type SetAuthUserDataType = { type: typeof SET_USER_DATA, payload:SetAuthUserDataPayloadType }


export const setAuthUserData = (userId:number|null, email:string|null, login:string|null, isAuth:boolean):SetAuthUserDataType => ({
        type: SET_USER_DATA, payload: {userId, email, login, isAuth}
});


type GetCaptchaUrlSuccessType = {type: typeof GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl: string} }


    export const getCaptchaUrlSuccess = (captchaUrl: string):GetCaptchaUrlSuccessType => {
        return {type: "GET-CAPTCHA-URL-SUCCESS", payload: {captchaUrl}}
    };

    export const getCaptchaUrl = () => async (dispatch:any) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl));
    };


    export const getAuthUserData = () => {
        return async (dispatch: any) => {
            let response = await userAPI.authMe()
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            };
        }
    };

    export const login = (email:string, password:string, rememberMe:boolean, captcha:string) => async (dispatch:any) => {
        let response = await userAPI.login(email, password, rememberMe, captcha);
        if (response.data.resultCode === 0) {
            //success, get auth data
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
            let errMessage = response.data.messages.length > 0 ? response.data.messages[0] : "some error"
            let action = stopSubmit("login", {_error: errMessage});
            dispatch(action)
        }
    };

    export const logout = () => {
        return (dispatch: any) => {
            userAPI.Logout()
                .then((response: { data: { resultCode: number; }; }) => {
                    if (response.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false));
                    }
                })
        }
    }

export default authReducer;
