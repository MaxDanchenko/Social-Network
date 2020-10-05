import Styles from "../Comment.module.css";
import {Field} from "redux-form";
import React from "react";


const CommentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Styles.writeMessage}>
            <Field  placeholder={'Write your message'} component='textarea'
                    className={Styles.MessageArea} name="newCommentAdd" cols="2" maxLength={'500'}/>
            <button className={Styles.SendButton}>Send</button>
        </form>

    )
}

export default CommentForm