import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-browser-router";
import {getStatus, getUserProfile, updateStatus} from "../../../Redux/profileReducer";
import {compose} from "redux";
import {auth} from "../../../Redux/authUserReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.id
        if (!this.props.id) {
            this.props.history.push('/Sign In')
        }

        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }
    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.authUser.id,
    isAuth: state.authUser.isAuth
})

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, auth}),
    withRouter,

)(ProfileContainer)
