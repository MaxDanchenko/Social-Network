import React from "react";
import Sidebar from "./GeneralSidebar";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  getStatus,
  getUserProfile,
  savePhoto,
  updateStatus,
} from "../../../Redux/profileReducer";
import { auth } from "../../../Redux/authUserReducer";
import { withRouter } from "react-browser-router";

class GeneralSidebarContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.id;
    if (!this.props.id) {
      this.props.history.push("/Sign In");
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId)
      this.refreshProfile();
  }
  render() {
    return <Sidebar {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.authUser.isAuth,
  id: state.authUser.id,
});
export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    auth,
    savePhoto,
  }),
  withRouter
)(GeneralSidebarContainer);
