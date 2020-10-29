import React from "react";
import {addPostActionCreator} from "../../../Redux/commentReducer";
import {connect} from "react-redux";
import Comment from "./Comment";
import {compose} from "redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect";


const mapStateToProps = (state) => {
    return {
        personsList: state.commentPage.personsList,
        commentaryList: state.commentPage.commentaryList,
        newCommentAdd: state.commentPage.newCommentAdd
    }
}

const mapDispatchToProps = (dispatch) => ({
    onAddPost: (newCommentAdd) => {
        dispatch(addPostActionCreator(newCommentAdd))
    }
})

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps))(Comment)
