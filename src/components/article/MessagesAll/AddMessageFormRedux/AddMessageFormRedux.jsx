import Styles from './AddMessageFormRedux.module.scss'
import {Field} from 'redux-form'
import React from 'react'
import {maxLengthCreator} from '../../../../utilities/validator'


const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={Styles.writeMessage}>
      <Field
        component="input"
        placeholder={'Write your message'}
        className={Styles.MessageArea}
        name="newMessageBody"
        cols="100"
        maxLength={'500'}
      />
      <button type={'button'} className={Styles.SendButton}>Send</button>
    </form>
  )
}

export default AddMessageForm
