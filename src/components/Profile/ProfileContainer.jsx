import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto,  SetUserProfileActionCreater,
    updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    refreshProfile= ()=> {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
        }
        if (!userId) {
            this.props.history.push("/Login")
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() { this.refreshProfile ()}

    componentDidUpdate (prevProps, prevState) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {this.refreshProfile ()}
      }



    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.userId,
});

export default compose(
    connect(mapStateToProps, {SetUserProfileActionCreater, getUserProfile, getUserStatus, updateStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

