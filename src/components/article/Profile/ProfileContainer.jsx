import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-browser-router";
import {getUserProfile} from "../../../Redux/profileReducer";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 11069
        this.props.getUserProfile(userId)
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,

)(ProfileContainer)
