import {userAPI, securityAPI} from "../api/api";
import {SetUserProfileActionCreater} from "./profile-reducer";
import {stopSubmit} from "redux-form";


//   25 Минута поле для ввода


export const SET_USER_DATA = "SET-USER-DATA";
export const GET_CAPTCHA_URL_SUCCES = "GET-CAPTCHA-URL-SUCCES";     //АДРЕС РОЛНЫЙ

let initialState ={
       userId: null,
       email: null,
       login: null,
       isAuth: false,
       isFetching: false,
       captchaUrl: null   // if null captcha is not required
      }

const authReducer = (state=initialState, action) => {

    switch (action.type)  {
           case SET_USER_DATA:
                 return {...state, ...action.payload};

           case GET_CAPTCHA_URL_SUCCES:
               return {...state, ...action.payload};

           default:
                return state;
    }
};


export const setAuthUserData = (userId, email, login, isAuth)=> { return  {type: "SET-USER-DATA", payload:{userId, email, login, isAuth}  } };
export const getCaptchaUrlSuccess = (captchaUrl)=> { return  {type: "GET-CAPTCHA-URL-SUCCES", payload:{captchaUrl}  } };



export const getCaptchaUrl = () => async (dispatch) => {
         const response=await securityAPI.getCaptchaUrl ();
         const captchaUrl=response.data.url;
         dispatch (getCaptchaUrlSuccess(captchaUrl));
    };


export const getAuthUserData = () => {
    return async (dispatch) => {
        let response=await userAPI.authMe ()
                if (response.data.resultCode===0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                       };
                     }};

export const login = (email, password, rememberMe, captcha) => async (dispatch)=> {
    let response= await userAPI.login (email, password, rememberMe, captcha);
    if (response.data.resultCode ===0) {
        //success, get auth data
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode===10) {
            dispatch(getCaptchaUrl());
        }
        let errMessage= response.data.messages.length > 0 ? response.data.messages[0] : "some error"
        let action=stopSubmit("login", {_error: errMessage});
        dispatch (action)}
};

export const logout = () => {
    return (dispatch) => {
        userAPI.Logout ()
            .then(response => {
                if (response.data.resultCode===0) {
                    dispatch(setAuthUserData(null, null, null, false));
                      }})}}


export default authReducer;



