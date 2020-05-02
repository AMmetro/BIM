import {profileAPI, userAPI} from "../api/api";
import {toggleFollowInProgres, unfollowSucsess} from "./users-reducer";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST="DELETE-POST"

let initialState =
    {
        posts: [
            {id: 1, posts: 'how are you', likesCount: 12},
            {id: 2, posts: 'It\`s what you do', likesCount: 11},
            {id: 3, posts: 'bla bla bla', likesCount: 25}
        ],
        newPostText: 'it-kamasutra.com',
        profile: null,
        status: ""
    };

const profileReducer = (state=initialState, action) => {

    switch (action.type) {


        case ADD_POST: {
                let newPost = {
                id: 4,
                posts: action.newPostText,
                likesCount: 0
            };
            return {...state,

                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case DELETE_POST: {
            return {...state, posts: state.posts.filter(pst => pst.id!=action.postId )
                }
                        }


        case SET_USER_PROFILE: {
               return {...state, profile:action.profile}
        }


        case SET_USER_STATUS: {
                   return {...state, status: action.status}
        }

        default:
            return state;
    }
};


export const addPostActionCreator = (newPostText)=>{return  {type: "ADD-POST", newPostText }};
export const deletePostActionCreator = (postId)=>{return  {type: "DELETE-POST", postId}};
export const SetUserProfileActionCreater = (profile)=>{return  {type: "SET-USER-PROFILE", profile }};
export const setUserStatusActionCreator = (status)=>  ( { type: "SET-USER-STATUS", status} );



export const getUserProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile (userId)
            .then(response => {
                dispatch(SetUserProfileActionCreater(response.data))  })    }}

export const getUserStatus = (userId) => {
    return (dispatch) => {
             profileAPI.getStatus (userId)
            .then(response => {
                           dispatch(setUserStatusActionCreator(response.data))  })    }}

export const updateStatus = (status) => {
        return (dispatch) => {
               profileAPI.updateStatus (status)
            .then(response => {
             if (response.data.resultCode===0){
              dispatch(setUserStatusActionCreator(status))}  })  }}





 export default profileReducer;
