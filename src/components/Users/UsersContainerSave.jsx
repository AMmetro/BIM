import React from "react";
import Users from "../Users/Users"
import {connect} from "react-redux";
import * as axios from "axios";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";





let mapStateToProps= (state)=> {
  return { users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
            }
};

let mapDispatchToProps = (dispatch)=> {
  return {

      follow: (userId) => {

         dispatch (followAC(userId));
                          },

        unfollow: (userId) => {
            dispatch (unfollowAC(userId));
      },

         setUsers: (users)=> {
        dispatch (setUsersAC(users));
      },

      setCurrentPage: (pageNumber) => {
          dispatch (setCurrentPageAC (pageNumber));
      },

      setTotalUsersCount: (totalCount) => {
          dispatch (setTotalUsersCountAC (totalCount));
      }

  }
};

export default connect (mapStateToProps, mapDispatchToProps)(Users);





