import Styles from './AddMessageFormRedux.module.scss'
import {Field, InjectedFormProps} from 'redux-form'
import React from 'react'

type PropsType = {
  newMessageBody: string
}
const AddMessageForm: React.FC<InjectedFormProps<PropsType>> = ({handleSubmit}) => {
  return (
    <div className={Styles.wrap}>
      <form onSubmit={handleSubmit} className={Styles.writeMessage}>
        <Field
          component="input"
          placeholder={'Write your message'}
          className={Styles.MessageArea}
          name="newMessageBody"
          cols="100"
          maxLength={'500'}
        />
      </form>
    </div>
  )
}

export default AddMessageForm
