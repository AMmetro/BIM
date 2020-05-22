import React from "react";
import {createField, Input, Textarea} from "../../Common/FormsControl/FormControls";
import {reduxForm} from "redux-form";


const ProfileDataForm = ({handleSubmit, profile}) => {


     return (

         <form onSubmit={handleSubmit} >

             <b>Full name</b>: {createField("Full name", "fullName", [], Input)}

             <b> Looking for a job : {createField("", "lookingForAJob", [], Input, {type:"checkbox"})}</b>

             <b>My skills:{  <b> {createField("My skills", "lookingForAJoblookingForAJobDescription", [],Textarea)}</b>    }</b>

             <div><span> About Me: {createField("About Me", "AboutMeDescription", [],Textarea)} </span></div>

             <div> <button>save</button>  </div>



         </form>



    )
}

const ProfileDataFormReduxForm = reduxForm ({form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;




