import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../Utils/validators/validators";
import {Textarea} from "../../Common/FormsControl/FormControls";

const maxLength50=maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name={"newMessageBody"}
                       placeholder={"enter you message"} />

            </div>
            <div><button>Add Message</button></div>
        </form>
    )
};

export default reduxForm ({form:"dialogAddMessageForm" }) (AddMessageForm);