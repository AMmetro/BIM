import React, {useState} from 'react';
import sss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.jpg';
import {savePhoto} from "../../../redux/profile-reducer";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    const Contact = ({contactTitle, contactValue}) => {                                                  ////////////////////// what is that???
        return <div className={sss.contact}>{contactTitle} : {contactValue}</div>                      // до 12-35   в 97 уроке
    }

    const ProfileData = (props) => {
        const goToEditMode = () => {
            setEditMode(true)
        }
        return (
                <div>
                    <div><span>My name is: {props.profile.fullName} </span></div>
                    <div><span> Looking for a job : {props.profile.lookingForAJob ? "yes" : "no"} </span></div>

                    <div><span> {!props.profile.lookingForAJob &&
                    <b>My skills:{props.profile.lookingForAJobDescription}</b>} </span></div>

                    <div><span> My id: {props.profile.userId} </span></div>
                    <div><span> AboutMe: {props.profile.aboutMe} </span></div>

                    <div><span> Contacts: {Object.keys(props.profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
                    })}  </span></div>
                    {props.isOwner
                         ? <div> <button onClick={goToEditMode}>edit</button> </div>
                         : "you are not owner this page"}
                </div>
                 ) }



    const onSubmit=(formData)=> {
       console.log("fg")
    }



    return (
        <div className={sss.ProfileInfo}>

            <div className={sss.descriptionBlock}>

                <ProfileStatusWithHooks                          //status={"temporaly status"}
                    status={props.status}
                    props={props}
                    updateStatus={props.updateStatus}/>

                <div>
                    <img src={props.profile.photos.large || userPhoto} align="left" className={sss.mainPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>

                {editMode
                    ? <ProfileDataForm onSubmit={onSubmit} profile={props.profile}  Contact={props.Contact} isOwner={props.isOwner}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}/>}




            </div>
        </div>


    )
}


export default ProfileInfo;










