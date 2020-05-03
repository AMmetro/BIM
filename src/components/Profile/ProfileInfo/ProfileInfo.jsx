import React from 'react';
import sss from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = (props) => {
    if (!props.profile) {              // эквивавлентно props.profile==null || undefinite
        return <Preloader/>
    }

    return (
        <div className={sss.ProfileInfo}>

            {/*<div>*/}
            {/*    <img src="https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg" className={sss.imgClass}/>*/}
            {/*</div>*/}


            <div className={sss.descriptionBlock}>

                <ProfileStatusWithHooks //status={"temporaly status"}
                    status={props.status}
                    props={props}
                    updateStatus={props.updateStatus} />


                <div>
                    <img src={props.profile.photos.large} align="left"/>
                </div>

                <div>
                    <div><span> My name is: {props.profile.fullName} </span></div>
                    <div><span> My id: {props.profile.userId} </span></div>
                    <div><span> AboutMe: {props.profile.aboutMe} </span></div>
                    <div><span> Contacts: {props.profile.contacts.facebook} </span></div>
                </div>
            </div>
        </div>
    )
}


export default ProfileInfo;







