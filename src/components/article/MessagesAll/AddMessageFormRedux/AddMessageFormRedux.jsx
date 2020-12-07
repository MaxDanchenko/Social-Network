import Styles from './AddMessageFormRedux.module.scss';
import {Field} from "redux-form";
import React from "react";
import {maxLengthCreator, requiredField} from "../../../../utilities/validator";

const maxLength15 = maxLengthCreator(15)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={Styles.writeMessage}>
            <Field validate={[requiredField, maxLength15]}
                component='textarea'
                   placeholder={'Write your message'}
                   className={Styles.MessageArea}
                   name="newMessageBody" cols="2"  maxLength={'500'}/>
            <button className={Styles.SendButton} >Send</button>
        </form>
    )
}


export default AddMessageForm
