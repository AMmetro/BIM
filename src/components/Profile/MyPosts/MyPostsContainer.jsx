import React from "react";
import {addPostActionCreator,deletePostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";



// const MyPostsContainer = (props) => {

// let state = props.store.getState();

// let addPost = ()=> {
//     props.store.dispatch (addPostActionCreater());
// };


// let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator (text);
//     props.store.dispatch (action)
//      };


//     return (
///
//         <MyPosts updateNewPostText={onPostChange}
//                  addPost={addPost}
//                  posts={state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}   />)
// };



let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        },

        deletePost: (postId) => {
                dispatch(deletePostActionCreator(postId));
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;



