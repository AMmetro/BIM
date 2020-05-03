import React from "react";
import sss from "./Users.module.css"
import Paginator from "./Paginator"
import userPhoto from '../../assets/images/user.jpg';
import {NavLink} from "react-router-dom";


let Users = (props) => {


    return (
        <div>
            <div>

                 <Paginator
                        totalUserCount={props.totalUserCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                                                             />

            </div>
            {props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                  <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                       className={sss.usersPhoto}/>
                                    </NavLink>
                                </div>
                                <div>

                                   {u.followed ? <button disabled={props.isFollowing}
                                           onClick={() => {
                                           props.unfollow(u.id);
                                          }}>unfollow</button>
                                       : <button disabled={props.isFollowing}
                                           onClick={() => {
                                           props.follow(u.id);
                                          }}>follow</button>}
                                </div>
                            </span>
                <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    {/*<div>{u.location.country}</div>*/}
                                    {/*<div>{u.location.city}</div>*/}
                                </span>
                            </span>
            </div>)
            }
        </div>)
};

export default Users;

