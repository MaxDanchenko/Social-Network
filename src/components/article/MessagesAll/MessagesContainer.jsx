import React from "react";
import {sendMessageCreator} from "../../../Redux/messageReducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        friendsList: state.messagePage.friendsList,
        dialogsList: state.messagePage.dialogsList,
        messages: state.messagePage.messages
    }
}

const mapDispatchToProps = (dispatch) => ({
    sendMessage: (newMessageBody) => {
        dispatch(sendMessageCreator(newMessageBody))
    }
})

export default compose(connect(mapStateToProps, mapDispatchToProps))(Messages)
