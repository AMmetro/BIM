import React from "react";
import sss from "./Users.module.css"
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg';


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
             this.props.setUsers(response.data.items);
             this.props.setTotalUsersCount(response.data.totalCount);
             debugger
            });
    };

    onPageChanged=(pageNumber)=> {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUserCount/this.props.pageSize);
        let pages =[];
        for (let i=1; i<=pageCount; i++) {

                  pages.push(i)   };



        return (
              <div>
                  <div>

                      {
                          pages.map(p => {
                           return <span className={this.props.currentPage=== p && sss.selectedPage}
                           onClick={ (e) => {this.onPageChanged(p) }} >{p}</span>
                          }
                           )}
                  </div>



                {this.props.users.map(u => <div key={u.id}>
                            <span>
                                <div>
                                  <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                       className={sss.usersPhoto}/>
                                </div>

                                <div>
                                   {u.follow ? <button onClick={() => {
                                          this.props.unfollow(u.id)
                                      }}>unfollow</button>
                                      : <button onClick={() => {
                                          this.props.follow(u.id)
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

    }
};


export default Users;

