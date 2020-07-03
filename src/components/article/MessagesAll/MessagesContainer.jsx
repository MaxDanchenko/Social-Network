import React from "react";
import {addMessageActionCreator, newPostActionCreator} from "../../../Redux/messageReducer";
import {connect} from "react-redux";
import Messages from "./Messages";



const mapStateToProps = (state) => {
    return {
        friendsList: state.messagesPage.friendsList,
        dialogsList: state.messagesPage.dialogsList,
        myDialogsList: state.messagesPage.myDialogsList,
        myDialogsListNew: state.messagesPage.myDialogsListNew

    }
}
debugger
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        newPostActionCreator: (text) => {
            let action = newPostActionCreator(text)
            dispatch(action);
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)


export default MessagesContainer;