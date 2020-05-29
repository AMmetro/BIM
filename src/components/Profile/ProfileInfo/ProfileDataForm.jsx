import React from "react";
import {createField, Input, Textarea} from "../../Common/FormsControl/FormControls";
import {reduxForm} from "redux-form";
import sss from "./ProfileInfo.module.css";


const ProfileDataForm = ({handleSubmit, profile}) => {




      return (

         <form onSubmit={handleSubmit} >

             <b>Full name</b>: {createField("Full name", "fullName", [], Input)}

             <b> Looking for a job : {createField("", "lookingForAJob", [], Input, {type:"checkbox"})}</b>

             <div>
                 <b>My professional skills</b>:
                 { createField("My professional skills", "lookingForAJobDescription", [],Textarea)}
             </div>

             <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}

             <div> Contacts: {Object.keys(profile.contacts).map(key => {
                 return (
                 <b> {key} : {createField(key, "contacts."+key, [], Input)}</b>  // in output make placeholder with name key



                 // <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                 )
             })}  </div>



             <div> <button>save</button>  </div>


         </form>
    )
}

const ProfileDataFormReduxForm = reduxForm ({form: "edit-profile" })(ProfileDataForm)

export default ProfileDataFormReduxForm;




