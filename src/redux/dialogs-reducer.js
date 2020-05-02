const SEND_MESSAGE="SEND-MESSAGE";


let initialState ={
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo1'},
        {id: 4, message: 'Yo2'},
        {id: 5, message: 'Yo3'}
    ],
    // newMessageBody: ''
};

const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {

             case SEND_MESSAGE:
             let body = action.newMessageBody;
             return {
                 ...state,
                 // newMessageBody: '',
                 messages: [...state.messages, {id: 6, message: body}]
             };

            default:
            return state;
    }

    // switch (action.type) {
    //     case UPDATE_NEW_MESSAGE_BODY:
    //         state.newMessageBody = {...state.newMessageBody};
    //         state.newMessageBody = action.body;
    //         return state;
    //
    //     case SEND_MESSAGE:
    //         let body = state.newMessageBody;
    //         state.messages.push({id: 6, message: body});
    //         state.newMessageBody="";
    //         return state;
    //
    //      default:
    //          return state;
    // }
};

export const sendMessageCreator = (newMessageBody)=> { return  {type: "SEND-MESSAGE", newMessageBody } };

export default dialogsReducer;