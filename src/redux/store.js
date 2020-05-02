// import profileReducer from "./profile-reducer";
// import dialogsReducer from "./dialogs-reducer";
//
//
//
//
// let store ={
//
//  _state: {
//      profilePage: {
//                    posts: [
//                          {id: 1, postTxt: 'how are you', likesCount: 12},
//                          {id: 2, postTxt: 'It\`s what you do', likesCount: 11},
//                          {id: 3, postTxt: 'bla bla bla', likesCount: 25}
//                            ],
//                    newPostText: 'it-kamasutra.com'
//                   },
//      dialogsPage: {
//                    dialogs: [
//                              {id: 1, name: 'Dimych'},
//                              {id: 2, name: 'Andrei'},
//                              {id: 3, name: 'Sveta'},
//                              {id: 4, name: 'Sasha'},
//                              {id: 5, name: 'Viktor'}
//                            ],
//                   messages: [
//                              {id: 1, message: 'Hi'},
//                              {id: 2, message: 'How are you'},
//                              {id: 3, message: 'Yo1'},
//                              {id: 4, message: 'Yo2'},
//                              {id: 5, message: 'Yo3'}
//                            ],
//                   newMessageBody: ''
//                  },
//      sidebar: {}
//  },
//
//     getState() {
//         return this._state;
//            },
//
//      subscribe (observer) {
//      this._callSubscriber = observer;
//         },
//
//
//
//     dispatch(action) {
//
//      profileReducer (this._state.profilePage, action);
//      dialogsReducer (this._state.dialogsPage, action);
//         this._callSubscriber(this._state);
//
//
//       }
// };
//
//
//
//
//
// export default store;
// window.Store= store;