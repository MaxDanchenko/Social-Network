import React from "react";
import { sendMessageCreator } from "../../../Redux/messageReducer";
import { connect } from "react-redux";
import Messages from "./Messages";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    friendsList: state.messagePage.friendsList,
    dialogsList: state.messagePage.dialogsList,
    messages: state.messagePage.messages,
  };
};

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (newMessageBody) => {
    dispatch(sendMessageCreator(newMessageBody));
  },
});

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Messages);
