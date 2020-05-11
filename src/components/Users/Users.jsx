import React from "react";
import Paginator from "../Common/Paginator/Paginator"
import User from "./User";


let Users = ({totalUserCount,pageSize,currentPage,
             onPageChanged,isFollowing,unfollow,follow,users }) => {

             
    return (
        <div>
            <div>
                 <Paginator
                        totalUserCount={totalUserCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={onPageChanged}  />
            </div>


            {users.map(u =>
                            <User
                                isFollowing={isFollowing}
                                unfollow={unfollow}
                                follow={follow}
                                user={u}
                                key={u.id}
                                    />
                                    ) }



            {/*{users.map(u => <div key={u.id}>*/}
            {/*                <span>*/}
            {/*                    <div>*/}
            {/*                        <NavLink to={'/profile/' + u.id}>*/}
            {/*                      <img src={u.photos.small != null ? u.photos.small : userPhoto}*/}
            {/*                           className={sss.usersPhoto}/>*/}
            {/*                        </NavLink>*/}
            {/*                    </div>*/}
            {/*                    <div>*/}

            {/*                       {u.followed ? <button disabled={isFollowing}*/}
            {/*                               onClick={() => {*/}
            {/*                               unfollow(u.id);*/}
            {/*                              }}>unfollow</button>*/}
            {/*                           : <button disabled={isFollowing}*/}
            {/*                               onClick={() => {*/}
            {/*                               follow(u.id);*/}
            {/*                              }}>follow</button>}*/}
            {/*                    </div>*/}
            {/*                </span>*/}
            {/*    <span>*/}
            {/*                    <span>*/}
            {/*                        <div>{u.name}</div>*/}
            {/*                        <div>{u.status}</div>*/}
            {/*                    </span>*/}
            {/*                    <span>*/}
            {/*                        /!*<div>{u.location.country}</div>*!/*/}
            {/*                        /!*<div>{u.location.city}</div>*!/*/}
            {/*                    </span>*/}
            {/*                </span>*/}
            {/*</div>)*/}
            {/*}*/}
        </div>)
};

export default Users;

