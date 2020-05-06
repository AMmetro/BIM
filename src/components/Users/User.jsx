import React from "react";
import sss from "./Users.module.css"
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";


let User = ({isFollowing,unfollow,follow,user }) => {


    return (
        <div>
             {
                  <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + user.id}>
                                  <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                       className={sss.usersPhoto}/>
                                    </NavLink>
                                </div>
                                <div>

                                   {user.followed ? <button disabled={isFollowing}
                                                            onClick={() => {
                                           unfollow(user.id);
                                          }}>unfollow</button>
                                       : <button disabled={isFollowing}
                                           onClick={() => {
                                           follow(user.id);
                                          }}>follow</button>}
                                </div>
                            </span>
                <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    {/*<div>{user.location.country}</div>*/}
                                    {/*<div>{user.location.city}</div>*/}
                                </span>
                            </span>
            </div>
            }
        </div>)
};

export default User;

