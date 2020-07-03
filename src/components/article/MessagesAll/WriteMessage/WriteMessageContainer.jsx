import React from "react";
import {addMessageActionCreator, newPostActionCreator} from "../../../../Redux/messageReducer";
import {connect} from "react-redux";
import WriteMessage from "./WriteMessage";



const mapDispatchToProps = (dispatch) => {
    return {
        addMessageActionCreator: () => {
            dispatch(addMessageActionCreator());
        },
        newPostActionCreator: (text) => {
            let action = newPostActionCreator(text)
            dispatch(action);
        }
    }
}
const mapStateToProps = (state) => {
    return {
        myDialogsListNew: state.messagesPage.myDialogsListNew
    }
}

const WriteMessageContainer = connect(mapDispatchToProps, mapStateToProps)(WriteMessage)

export default WriteMessageContainer;