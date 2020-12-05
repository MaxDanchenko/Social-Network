import React from 'react';
import Styles from './Comment.module.scss'
import {reduxForm} from "redux-form";
import Author from "./AuthorOfCommentary/AuthorOfCommentary";
import Commentary from "./Commentary/Commentary";
import CommentForm from "./CommentFormRedux/CommentFormRedux";

const Comment = (props) => {
    let Comments = props.commentaryList.map(Comm => <Commentary id={Comm.id} post={Comm.post}/>);
    let Persons = props.personsList.map(Person => <Author name={Person.name} id={Person.id} com={Person.com}/>);

    let addNewComment = (values) => {
        props.onAddPost(values.newCommentAdd)
    }
    return (
        <div className={Styles.main}>
            <div className={Styles.personWrap}>
                {Persons}
            </div>
            <div className={Styles.commentWrap}>
                {Comments}
            </div>
            <CommentFormRedux  onSubmit={addNewComment}/>
        </div>
    )
}
const CommentFormRedux = reduxForm ({form: 'addNewComment'}) (CommentForm)


export default Comment;
