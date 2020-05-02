import React from "react";
import Header from "./Header"
import {connect} from "react-redux";
import Preloader from "../Common/Preloader/Preloader"
import * as axios from "axios";
import {logout, setAuthUserData} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    // componentDidMount() {
        // this.props.toggleIsFetching (true);

         // this.props.getAuthUserData();

        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
        //     {withCredentials:true})
        //     .then(response => {
        //             if (response.data.resultCode===0){
        //             let {id, email, login} = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //                                      }
        //     });
    // };


    render() {
       return <Header {...this.props} />    // передаем пропсы !!!!!!!!!!!!!!!!!!
    }
}

const mapStateToProps=(state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    state: state
 });




export default connect(mapStateToProps,{setAuthUserData,logout}) (HeaderContainer);







