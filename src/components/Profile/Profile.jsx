import React from "react";
import sss from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";




const Profile = (props) => {

      return (
             <div className={sss.Profile}>
             <ProfileInfo isOwner={props.isOwner}
                          profile={props.profile}
                          status={props.status}
                          updateStatus={props.updateStatus}
                                        />
             <MyPostsContainer store={props.store} />
         </div>
  )

};

export default Profile;

