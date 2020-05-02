import React from "react";
import sss from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItems from "./DialogItems/DialogItems";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import AddMessageForm from "./Message/AddMessageForm";



const Dialogs = (props) => {

    let state = props.dialogsPage;
    let newMessageBody = state.newMessageBody;

    let dialogElement = state.dialogs.map(element => <DialogItems id={element.id} key={element.id}
                                                                  name={element.name}/>);
    let messagesElements = state.messages.map(elem => <Message message={elem.message} id={elem.id} key={elem.id}/>);

    // let onSendMessageClick = () => {
    //     props.sendMessage();
    // };

    let addNewMessage=(value) =>
    { props.sendMessage(value.newMessageBody)
      }

    // if (props.auth==false) return <Redirect to={"/Login"}   />

    return (
        <div className={sss.dialogs}>
            <div className={sss.dialogsItems}>
                 {dialogElement}
                <AddMessageForm onSubmit={addNewMessage} />
            </div>
            <div className={sss.messages}>
                {messagesElements}
            </div>

        </div>
    )
};


// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={"textarea"} name={"newMessageBody"} placeholder={"enter you message"} />
//             </div>
//             <div><button>Add Message</button></div>
//         </form>
//     )
// };
//
// const AddMessageReduxForm=reduxForm ({form:"dialogAddMessageForm" }) (AddMessageForm);


export default Dialogs;