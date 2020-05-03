import React from "react";
import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";


it ('new post should be added', ()=> {
    // 1. let data
    let action = addPostActionCreator("it-camasuta")
    let state = {
        posts: [
            {id: 1, posts: 'how are you', likesCount: 12},
            {id: 2, posts: 'It\`s what you do', likesCount: 11},
            {id: 3, posts: 'bla bla bla', likesCount: 25}
               ],
               }
  //  2.action
   let newstate = profileReducer(state, action)

  // 3.expectation
    expect (newstate.posts.length).toBe(4);

});

//---------------------------------------------------------------------------------

it ('afret deleting length of message should be decrement', ()=> {
    // 1. let data
    let action = deletePostActionCreator (2)
    let state = {
        posts: [
            {id: 1, posts: 'how are you', likesCount: 12},
            {id: 2, posts: 'It\`s what you do', likesCount: 11},
            {id: 3, posts: 'bla bla bla', likesCount: 25}
        ],
    }
    //  2.action
    let newstate = profileReducer(state, action)

    // 3.expectation
    expect (newstate.posts.length).toBe(2);

});