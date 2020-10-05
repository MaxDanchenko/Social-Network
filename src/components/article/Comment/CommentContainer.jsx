import React from "react";
import {addPostActionCreator, newCommentActionCreator} from "../../../Redux/commentReducer";
import {connect} from "react-redux";
import Comment from "./Comment";



const mapStateToProps = (state) => {
    return {
        personsList: state.commentPage.personsList,
        commentaryList: state.commentPage.commentaryList,
        newCommentAdd: state.commentPage.newCommentAdd
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator());
        },
        newCommentActionCreator: (text) => {
            let action = newCommentActionCreator(text)
            dispatch(action);
        }
    }
}
const CommentContainer = connect(mapStateToProps, mapDispatchToProps)(Comment)


export default CommentContainer;