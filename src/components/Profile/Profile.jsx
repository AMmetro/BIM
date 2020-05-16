import React from "react";
import sss from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {savePhoto} from "../../redux/profile-reducer";




const Profile = (props) => {

      return (
             <div className={sss.Profile}>
             <ProfileInfo isOwner={props.isOwner}
                          profile={props.profile}
                          status={props.status}
                          updateStatus={props.updateStatus}
                          savePhoto={props.savePhoto}
                                        />
             <MyPostsContainer store={props.store} />
         </div>
  )

};

export default Profile;

