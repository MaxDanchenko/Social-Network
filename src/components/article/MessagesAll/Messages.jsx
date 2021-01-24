import React from 'react'
import Styles from './Messages.module.scss'
import Person from './Person/Person'
import MyAnswer from './MyAnswer/MyAnswer'
import {reduxForm} from 'redux-form'
import AddMessageForm from './AddMessageFormRedux/AddMessageFormRedux'


const Messages = (props) => {
  let FriendsName = props.friendsList.map((Friend) => (
    <Person id={Friend.id} name={Friend.name} src={Friend.src}/>
  ))
  let MyDialog = props.messages.map((Dialog) => (
    <MyAnswer message={Dialog.message}/>
  ))
  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }
  return (
    <div className={Styles.mainWrap}>
      <div className={Styles.personsWrap}>{FriendsName}</div>
      <div className={Styles.messageWrap}>
        <div className={Styles.message}>
          {MyDialog}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(
  AddMessageForm
)

export default Messages
