import {userAPI} from "../api/api";
import {SetUserProfileActionCreater} from "./profile-reducer";
import {stopSubmit} from "redux-form";


export const SET_USER_DATA = "SET-USER-DATA";

let initialState ={
       userId: null,
       email: null,
       login: null,
       isAuth: false,
       isFetching: false
      }

const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}

        default:
            return state;
    }
};



export const setAuthUserData = (userId, email, login, isAuth)=> { return  {type: "SET-USER-DATA", payload:{userId, email, login, isAuth}  } };

export const getAuthUserData = () => {
    return (dispatch) => {
        return userAPI.authMe ()
            .then(response => {
                          if (response.data.resultCode===0) {
                              let {id, email, login} = response.data.data;
                              dispatch(setAuthUserData(id, email, login, true));
                               }});
                     }};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        userAPI.Login (email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode===0) {
                    dispatch(getAuthUserData());
                } else {
                    let errMessage= response.data.messages.length > 0 ? response.data.messages[0] : "some error"
                    let action=stopSubmit("login", {_error: errMessage});
                    dispatch (action)}
            })}};

export const logout = () => {
    return (dispatch) => {
        userAPI.Logout ()
            .then(response => {
                if (response.data.resultCode===0) {
                    dispatch(setAuthUserData(null, null, null, false));
                      }})}}


export default authReducer;



